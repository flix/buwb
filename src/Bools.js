import {applySubst} from "./BoolUnification.js";
import {Cache} from "./Cache.js";

/**
 * The TRUE constant.
 */
export let TRUE = {type: 'TRUE'}

/**
 * The FALSE constant.
 */
export let FALSE = {type: 'FALSE'}

/**
 * Returns `true` if the given formula is the TRUE constant.
 */
export function isTrue(f) {
    return f.type === 'TRUE'
}

/**
 * Returns `true` if the given formula is the FALSE constant.
 */
export function isFalse(f) {
    return f.type === 'FALSE'
}

/**
 * Returns `true` if the given formula is a variable.
 */
export function isVar(f) {
    return f.type === 'VAR'
}

/**
 * Returns `true` if the given formula is a negation.
 */
export function isNot(f) {
    return f.type === 'NOT'
}

/**
 * Returns `true` if the given formula is a conjunction.
 */
export function isAnd(f) {
    return f.type === 'AND'
}

/**
 * Returns `true` if the given formula is a disjunction.
 */
export function isOr(f) {
    return f.type === 'OR'
}

/**
 * Returns `true` if the given `x` is a Boolean formula.
 */
export function isBool(x) {
    return isTrue(x) || isFalse(x) || isVar(x) || isAnd(x) || isOr(x)
}

/**
 * Returns the variable formula with name `x`.
 */
export function mkVar(x) {
    if (typeof x !== "string") {
        throw Error(`Unexpected non-string: ${x} of type ${typeof x}.`)
    }

    return {type: 'VAR', name: x}
}

/**
 * Returns the negation of the formula `x`.
 */
export function mkNot(x) {
    if (x.type === undefined) throw Error(`Illegal argument: ${x}.`)

    if (isTrue(x)) {
        return FALSE
    } else if (isFalse(x)) {
        return TRUE
    } else if (isNot(x)) {
        return x.f;
    } else if (isOr(x)) {
        // ¬(x ∨ y) => ¬x ∧ ¬y
        return mkAnd(mkNot(x.f1), mkNot(x.f2))
    } else if (isAnd(x)) {
        // ¬(x ∧ y) => ¬x ∨ ¬y
        return mkOr(mkNot(x.f1), mkNot(x.f2))
    } else {
        return {type: 'NOT', f: x}
    }
}

/**
 * Returns the conjunction of the two formulae `x` and `y`.
 */
export function mkAnd(x, y) {
    if (x.type === undefined) throw Error(`Illegal argument: ${x}.`)
    if (y.type === undefined) throw Error(`Illegal argument: ${y}.`)

    if (isTrue(x)) {
        return y
    } else if (isTrue(y)) {
        return x
    } else if (isFalse(x)) {
        return FALSE
    } else if (isFalse(y)) {
        return FALSE
    } else if (isSyntacticEq(x, y)) {
        return x
    }

    return {type: 'AND', f1: x, f2: y}
}

/**
 * Returns the disjunction of the two formulae `x` and `y`.
 */
export function mkOr(x, y) {
    if (x.type === undefined) throw Error(`Illegal argument: ${x}.`)
    if (y.type === undefined) throw Error(`Illegal argument: ${y}.`)

    if (isTrue(x)) {
        return TRUE
    } else if (isTrue(y)) {
        return TRUE
    } else if (isFalse(x)) {
        return y
    } else if (isFalse(y)) {
        return x
    } else if (isSyntacticEq(x, y)) {
        return x
    }

    return {type: 'OR', f1: x, f2: y}
}

/**
 * Returns the size of the given formula `x`.
 */
export function size(x) {
    if (isTrue(x)) {
        return 1
    } else if (isFalse(x)) {
        return 1
    } else if (isVar(x)) {
        return 1
    } else if (isNot(x)) {
        return size(x.f) + 1
    } else if (isAnd(x)) {
        return size(x.f1) + size(x.f2) + 1
    } else if (isOr(x)) {
        return size(x.f1) + size(x.f2) + 1
    } else {
        throw Error(`Unexpected argument: ${x}.`)
    }
}

/**
 * Returns the precedence of the given type `x`.
 */
// TODO: FIX precedence in parser.
export function precedence(x) {
    switch (x) {
        case "VAR":
            return 0
        case "TRUE":
            return 0
        case "FALSE":
            return 0
        case "NOT":
            return 1
        case "AND":
            return 2
        case "OR":
            return 2
        default:
            throw Error(`Unexpected argument: ${x}.`)
    }
}

/**
 * Returns all the free variables in the formula `x`.
 */
export function freeVars(x) {
    let result = new Set()

    function visit(w) {
        if (isTrue(w)) {
            // nop
        } else if (isFalse(w)) {
            // nop
        } else if (isVar(w)) {
            result.add(w.name)
        } else if (isNot(w)) {
            visit(w.f)
        } else if (isAnd(w)) {
            visit(w.f1)
            visit(w.f2)
        } else if (isOr(w)) {
            visit(w.f1)
            visit(w.f2)
        } else {
            throw Error(`Unexpected argument: ${x}.`)
        }
    }

    visit(x)

    return [...result].sort()
}

/**
 * Returns the truth table for the given formula `x`.
 *
 * The truth table is a multi dimensional array of the form:
 *
 * [
 *   [T, T, T... T]
 *   [T, T, F... F]
 * ]
 *
 * where each row is a valuation and last col is the result.
 */
export function truthtable(x, freeVars) {
    if (x === undefined) throw new Error(`Illegal argument x: ${x}.`)
    if (freeVars === undefined) throw new Error(`Illegal argument freeVars: ${freeVars}.`)

    function visit(f, fvs) {
        if (fvs.length === 0) {
            return [[f]];
        } else {
            let [x, ...xs] = fvs;
            let f1 = applySubst({[x]: TRUE}, f)
            let f2 = applySubst({[x]: FALSE}, f)

            let extendedRows1 = visit(f1, xs).map(row => [TRUE, ...row])
            let extendedRows2 = visit(f2, xs).map(row => [FALSE, ...row])
            return extendedRows1.concat(extendedRows2)
        }
    }

    return visit(x, freeVars)
}

/**
 * Returns the CNF form of the given formula `x`.
 */
export function cnf(x) {
    if (x === undefined) throw new Error(`Illegal argument x: ${x}.`)
    return cnfAndDnf(x).cnf;
}

/**
 * Returns the DNF form of the given formula `x`.
 */
export function dnf(x) {
    if (x === undefined) throw new Error(`Illegal argument x: ${x}.`)
    return cnfAndDnf(x).dnf;
}

/**
 * Returns the CNF and DNF form of the given formula `x`.
 *
 * If you want to find CNF, you have to look at all rows that ends with F.
 * When you find those rows, take the inverted x,y, and z values from each respective column.
 *
 * If you want to find DNF, you have to look at all rows that ends with T.
 * When you find those rows, take the x,y, and z values from each respective column.
 *
 * See https://math.stackexchange.com/questions/636119/find-dnf-and-cnf-of-an-expression
 */
export function cnfAndDnf(x) {
    // Compute the free variables and the truth table.
    let fvs = freeVars(x)
    let tt = truthtable(x, fvs)

    // Returns the formula if it has no free variables.
    if (fvs.length === 0) {
        return x
    }

    let cnf = TRUE
    let dnf = FALSE
    tt.forEach(row => {
        let lastElm = row[fvs.length];
        if (isTrue(lastElm)) {
            let f = TRUE
            for (let i = 0; i < fvs.length; i++) {
                let currVar = mkVar(fvs[i])
                let currElm = row[i]
                if (isTrue(currElm)) {
                    f = mkAnd(f, currVar)
                } else if (isFalse(currElm)) {
                    f = mkAnd(f, mkNot(currVar))
                } else {
                    throw new Error(`Unexpected value: ${currElm}.`)
                }
            }
            dnf = mkOr(dnf, f)
        } else if (isFalse(lastElm)) {
            let f = FALSE
            for (let i = 0; i < fvs.length; i++) {
                let currVar = mkVar(fvs[i])
                let currElm = row[i]
                if (isTrue(currElm)) {
                    f = mkOr(f, mkNot(currVar))
                } else if (isFalse(currElm)) {
                    f = mkOr(f, currVar)
                } else {
                    throw new Error(`Unexpected value: ${currElm}.`)
                }
            }
            cnf = mkAnd(cnf, f)
        } else {
            throw new Error(`Unexpected value: ${lastElm}.`)
        }
    })

    return {cnf: cnf, dnf: dnf};
}

export function truthRow(f, fvs) {
    if (fvs.length === 0) {
        if (isTrue(f)) {
            return "T"
        } else if (isFalse(f)) {
            return "F"
        } else {
            throw new Error(`Unexpected value: ${f}.`)
        }
    } else {
        let [x, ...xs] = fvs
        return truthRow(applySubst({[x]: TRUE}, f), xs) + truthRow(applySubst({[x]: FALSE}, f), xs)
    }
}

/**
 * Optionally returns a minified version of formula `x`.
 */
export function minimize(x, recursively) {
    if (recursively === true) {
        return minimizeRecursively(x)
    } else if (recursively === false) {
        return lookup(x)
    } else {
        throw new Error(`Illegal non-Boolean argument: ${recursively}.`)
    }
}

/**
 * Recursively minimizes the formula `x`.
 */
function minimizeRecursively(x) {
    if (isTrue(x)) {
        return x
    } else if (isFalse(x)) {
        return x
    } else if (isVar(x)) {
        return x
    } else if (isNot(x)) {
        return lookup(mkNot(minimizeRecursively(x.f)))
    } else if (isAnd(x)) {
        return lookup(mkAnd(minimizeRecursively(x.f1), minimizeRecursively(x.f2)))
    } else if (isOr(x)) {
        return lookup(mkOr(minimizeRecursively(x.f1), minimizeRecursively(x.f2)))
    } else {
        throw Error(`Unexpected argument: ${x}.`)
    }
}

/**
 * Looks up the formula `x` in the cached table for minimal formulas.
 */
function lookup(x) {
    let fvs = freeVars(x)
    let n = fvs.length
    let table = Cache[n]

    if (table === undefined) {
        return x
    } else {
        let resultVector = truthRow(x, fvs)
        let minimal = table[resultVector]
        if (minimal === undefined) {
            return x
        }

        let subst = {}
        for (let i = 0; i < fvs.length; i++) {
            subst["x" + i] = mkVar(fvs[i])
        }
        return applySubst(subst, minimal)
    }
}

/**
 * Returns `true` if `x` and `y` are syntactically equal.
 */
export function isSyntacticEq(x, y) {
    if (x === undefined || x.type === undefined) throw Error(`Illegal argument: ${x}.`)
    if (y === undefined || y.type === undefined) throw Error(`Illegal argument: ${y}.`)

    if (isTrue(x) && isTrue(y)) {
        return true
    } else if (isFalse(x) && isFalse(y)) {
        return true
    } else if (isVar(x) && isVar(y)) {
        return x.name === y.name
    } else if (isNot(x) && isNot(y)) {
        return isSyntacticEq(x.f, y.f)
    } else if (isAnd(x) && isAnd(y)) {
        return isSyntacticEq(x.f1, y.f1) && isSyntacticEq(x.f2, y.f2)
    } else if (isOr(x) && isOr(y)) {
        return isSyntacticEq(x.f1, y.f1) && isSyntacticEq(x.f2, y.f2)
    } else {
        return false
    }
}

/**
 * Returns a human readable representation of the given formula.
 */
export function show(x) {
    if (isTrue(x)) {
        return "true"
    } else if (isFalse(x)) {
        return "false"
    } else if (isVar(x)) {
        return x.name;
    } else if (isNot(x)) {
        return `¬ (${show(x.f)})`
    } else if (isAnd(x)) {
        return `(${show(x.f1)}) ∧ (${show(x.f2)})`
    } else if (isOr(x)) {
        return `(${show(x.f1)}) ∨ (${show(x.f2)})`
    } else {
        throw Error(`Unexpected argument: ${x}.`)
    }
}
