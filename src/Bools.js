/*
 *  Copyright 2021 Magnus Madsen
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
import {applySubst} from "./Substitution.js";
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
 * Returns `true` if the given `f` is a Boolean formula.
 */
export function isBool(f) {
    return isTrue(f) || isFalse(f) || isNot(f) || isVar(f) || isAnd(f) || isOr(f)
}

/**
 * Returns a variable formula with the given `name`.
 */
export function mkVar(name) {
    if (typeof name !== "string") {
        throw Error(`Illegal argument 'name': ${name}.`)
    }

    return {type: 'VAR', name: name}
}

/**
 * Returns the negation of the formula `f`.
 */
export function mkNot(f) {
    if (f === undefined || !isBool(f)) throw new Error(`Illegal argument 'f': ${f}.`)

    if (isTrue(f)) {
        return FALSE
    } else if (isFalse(f)) {
        return TRUE
    } else if (isNot(f)) {
        return f.f;
    } else {
        return {type: 'NOT', f: f}
    }
}

/**
 * Returns the conjunction of the two formulas `f1` and `f2`.
 */
export function mkAnd(f1, f2) {
    if (f1 === undefined || !isBool(f1)) throw new Error(`Illegal argument 'f1': ${f1}.`)
    if (f2 === undefined || !isBool(f2)) throw new Error(`Illegal argument 'f2': ${f2}.`)

    if (isTrue(f1)) {
        return f2
    } else if (isTrue(f2)) {
        return f1
    } else if (isFalse(f1)) {
        return FALSE
    } else if (isFalse(f2)) {
        return FALSE
    } else if (isSyntacticEq(f1, f2)) {
        return f1
    }

    return {type: 'AND', f1: f1, f2: f2}
}

/**
 * Returns the disjunction of the two formulas `f1` and `f2`.
 */
export function mkOr(f1, f2) {
    if (f1 === undefined || !isBool(f1)) throw new Error(`Illegal argument 'f1': ${f1}.`)
    if (f2 === undefined || !isBool(f2)) throw new Error(`Illegal argument 'f2': ${f2}.`)

    if (isTrue(f1)) {
        return TRUE
    } else if (isTrue(f2)) {
        return TRUE
    } else if (isFalse(f1)) {
        return f2
    } else if (isFalse(f2)) {
        return f1
    } else if (isSyntacticEq(f1, f2)) {
        return f1
    }

    return {type: 'OR', f1: f1, f2: f2}
}

/**
 * Returns `true` if the Boolean formulas `f1` and `f2` are *syntactically* equal.
 */
function isSyntacticEq(f1, f2) {
    if (f1 === undefined || !isBool(f1)) throw new Error(`Illegal argument 'f1': ${f1}.`)
    if (f2 === undefined || !isBool(f2)) throw new Error(`Illegal argument 'f2': ${f2}.`)

    if (isTrue(f1) && isTrue(f2)) {
        return true
    } else if (isFalse(f1) && isFalse(f2)) {
        return true
    } else if (isVar(f1) && isVar(f2)) {
        return f1.name === f2.name
    } else if (isNot(f1) && isNot(f2)) {
        return isSyntacticEq(f1.f, f2.f)
    } else if (isAnd(f1) && isAnd(f2)) {
        return isSyntacticEq(f1.f1, f2.f1) && isSyntacticEq(f1.f2, f2.f2)
    } else if (isOr(f1) && isOr(f2)) {
        return isSyntacticEq(f1.f1, f2.f1) && isSyntacticEq(f1.f2, f2.f2)
    } else {
        return false
    }
}

/**
 * Returns a human readable representation of the given formula.
 */
export function showBool(f) {
    if (f === undefined || !isBool(f)) throw new Error(`Illegal argument 'f': ${f}.`)

    if (isTrue(f)) {
        return "true"
    } else if (isFalse(f)) {
        return "false"
    } else if (isVar(f)) {
        return f.name;
    } else if (isNot(f)) {
        return `¬(${showBool(f.f)})`
    } else if (isAnd(f)) {
        return `(${showBool(f.f1)}) ∧ (${showBool(f.f2)})`
    } else if (isOr(f)) {
        return `(${showBool(f.f1)}) ∨ (${showBool(f.f2)})`
    } else {
        throw Error(`Unexpected argument 'f': ${f}.`)
    }
}

/**
 * Returns the size of the given Boolean formula `x`.
 */
export function size(x) {
    if (x === undefined) {
        throw new Error(`Illegal argument 'x': ${x}.`)
    }

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
export function minBool(x, recursively) {
    if (recursively === true) {
        return minBoolRecursively(x)
    } else if (recursively === false) {
        return lookup(x)
    } else {
        throw new Error(`Illegal non-Boolean argument: ${recursively}.`)
    }
}

/**
 * Recursively minimizes the formula `x`.
 */
function minBoolRecursively(x) {
    if (isTrue(x)) {
        return x
    } else if (isFalse(x)) {
        return x
    } else if (isVar(x)) {
        return x
    } else if (isNot(x)) {
        return lookup(mkNot(minBoolRecursively(x.f)))
    } else if (isAnd(x)) {
        return lookup(mkAnd(minBoolRecursively(x.f1), minBoolRecursively(x.f2)))
    } else if (isOr(x)) {
        return lookup(mkOr(minBoolRecursively(x.f1), minBoolRecursively(x.f2)))
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

