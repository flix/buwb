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
 * Returns the size of the given Boolean formula `f`.
 */
export function size(f) {
    if (f === undefined || !isBool(f)) throw new Error(`Illegal argument 'f': ${f}.`)

    if (isTrue(f)) {
        return 1
    } else if (isFalse(f)) {
        return 1
    } else if (isVar(f)) {
        return 1
    } else if (isNot(f)) {
        return size(f.f) + 1
    } else if (isAnd(f)) {
        return size(f.f1) + size(f.f2) + 1
    } else if (isOr(f)) {
        return size(f.f1) + size(f.f2) + 1
    } else {
        throw Error(`Unexpected argument 'f': ${f}.`)
    }
}

/**
 * Returns all the free variables in the formula `f`.
 */
export function freeVars(f) {
    if (f === undefined || !isBool(f)) throw new Error(`Illegal argument 'f': ${f}.`)

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
            throw Error(`Unexpected argument: ${f}.`)
        }
    }

    visit(f)

    return [...result].sort()
}

/**
 * Returns the last column of the truth table of the formula `f`.
 */
export function truthRow(f, fvs) {
    if (f === undefined || !isBool(f)) throw new Error(`Illegal argument 'f': ${f}.`)
    if (!Array.isArray(fvs)) throw new Error(`Illegal argument 'fvs': ${fvs}.`)

    if (fvs.length === 0) {
        if (isTrue(f)) {
            return "T"
        } else if (isFalse(f)) {
            return "F"
        } else {
            throw new Error(`Unexpected value 'f': ${f}.`)
        }
    } else {
        let [x, ...xs] = fvs
        return truthRow(applySubst({[x]: TRUE}, f), xs) + truthRow(applySubst({[x]: FALSE}, f), xs)
    }
}

/**
 * Returns the minimized version of the formula `f`.
 */
export function minBool(f, recurse) {
    if (f === undefined || !isBool(f)) throw new Error(`Illegal argument 'f': ${f}.`)
    if (typeof recurse !== "boolean") throw new Error(`Illegal argument 'recurse': ${recurse}.`)

    if (recurse === true) {
        return minBoolRecursively(f)
    } else if (recurse === false) {
        return lookup(f)
    } else {
        throw new Error(`Illegal non-Boolean argument: ${recurse}.`)
    }
}

/**
 * Recursively minimizes the formula `f`.
 */
function minBoolRecursively(f) {
    if (f === undefined || !isBool(f)) throw new Error(`Illegal argument 'f': ${f}.`)

    if (isTrue(f)) {
        return f
    } else if (isFalse(f)) {
        return f
    } else if (isVar(f)) {
        return f
    } else if (isNot(f)) {
        return lookup(mkNot(minBoolRecursively(f.f)))
    } else if (isAnd(f)) {
        return lookup(mkAnd(minBoolRecursively(f.f1), minBoolRecursively(f.f2)))
    } else if (isOr(f)) {
        return lookup(mkOr(minBoolRecursively(f.f1), minBoolRecursively(f.f2)))
    } else {
        throw Error(`Illegal argument 'f': ${f}.`)
    }
}

/**
 * Looks up the formula `f` in the cached table of minimal formulas.
 */
function lookup(f) {
    if (f === undefined || !isBool(f)) throw new Error(`Illegal argument 'f': ${f}.`)

    let fvs = freeVars(f)
    let n = fvs.length
    let table = Cache[n]

    if (table === undefined) {
        // No lookup table. Simply return the formula.
        return f
    } else {
        // Compute the "semantics" of the formula.
        let resultVector = truthRow(f, fvs)

        // Look it up in the table.
        let minimal = table[resultVector]
        if (minimal === undefined) {
            // Not found.
            return f
        }

        // Found - but must use original variable names.
        let subst = {}
        for (let i = 0; i < fvs.length; i++) {
            subst["x" + i] = mkVar(fvs[i])
        }
        return applySubst(subst, minimal)
    }
}
