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
import {FALSE, boolFreeVars, isBool, isFalse, isTrue, mkAnd, mkNot, mkOr, mkVar, showBool, TRUE, isVar, isAnd, isSyntacticEq, isOr, isNot} from "./Bools.js";
import {applySubst} from "./Substitution";

/**
 * Returns a substitution that unifies f1 and f2 (if it exists).
 */
export function boolUnify(f1, f2) {
    if (f1 === undefined || !isBool(f1)) {
        throw new Error(`Illegal argument 'x': ${f1}.`)
    }
    if (f2 === undefined || !isBool(f2)) {
        throw new Error(`Illegal argument 'y': ${f2}.`)
    }

    // Special case for when
    // 1. free(f1) ∩ free(f2) == {}
    // 2. f1 matches f2 or f2 matches f1
    // This will generate 'simpler' substitutions than SVE,
    // especially when the equations have lots of variables.
    let f1Free = boolFreeVars(f1);
    let f2Free = boolFreeVars(f2);
    let freeOverlap = [...f1Free].filter(x => f2Free.includes(x))
    if (freeOverlap.length == 0) {
        try {
            let subst = syntacticMatch(f1, f2)
            return {status: "success", subst: subst}
        } catch (e) { }
        try {
            let subst = syntacticMatch(f2, f1)
            return {status: "success", subst: subst}
        } catch (e) { }
    }

    // The boolean expression we want to show is 0.
    let query = mkOr(mkAnd(f1, mkNot(f2)), mkAnd(mkNot(f1), f2))

    // The free variables in the query.
    let fvs = boolFreeVars(query)

    try {
        let subst = successiveVariableElimination(query, fvs)
        return {status: "success", subst: subst}
    } catch (e) {
        if (e instanceof SVEError) {
            return {status: "failure", reason: `Cannot unify: ${showBool(f1)} and ${showBool(f2)}`}
        } else {
            throw e
        }
    }
}

/**
 * Returns a substitution that falsifies `f` (or reports that no such substitution exists).
 */
function successiveVariableElimination(f, fvs) {
    if (!isBool(f)) {
        throw new Error(`Illegal argument 'f': ${f}.`)
    }
    if (!Array.isArray(fvs)) {
        throw new Error(`Illegal argument 'fvs': ${fvs}.`)
    }

    if (fvs.length === 0) {
        if (!satisfiable(f)) {
            return {}
        } else {
            throw new SVEError()
        }
    } else {
        let [x, ...xs] = fvs;
        let t0 = applySubst({[x]: FALSE}, f)
        let t1 = applySubst({[x]: TRUE}, f)
        let se = successiveVariableElimination(mkAnd(t0, t1), xs)
        let st = {[x]: mkOr(applySubst(se, t0), mkAnd(mkVar(x), mkNot(applySubst(se, t1))))}
        return leftMerge(st, se)
    }
}

/**
 * Returns the left-biased composition of the substitutions `subst1` and `subst2`.
 *
 * That is, always retains all the bindings in `subst1`.
 */
function leftMerge(subst1, subst2, overlapMustMatch = false) {
    if (typeof subst1 !== "object") {
        throw new Error(`Illegal argument 'subst1': ${subst1}.`)
    }
    if (typeof subst2 !== "object") {
        throw new Error(`Illegal argument 'subst2': ${subst2}.`)
    }

    let result = {}

    for (let [key, value] of Object.entries(subst1)) {
        result[key] = value
    }
    for (let [key, value] of Object.entries(subst2)) {
        // Left-biased. Only add if not present in subst1.
        if (subst1[key] === undefined) {
            result[key] = value
        } else if (overlapMustMatch && !isSyntacticEq(subst1[key], value)) {
            throw new SyntacticMatchError(`Variable ${key} matched two different values ${subst1[key]} and ${value}`)
        }
    }

    return result
}

/**
 * Returns `true` if the given Boolean formula `f` is true.
 */
function satisfiable(f) {
    if (f === undefined) {
        throw new Error(`Illegal argument 'f': ${f}.`)
    }

    if (isTrue(f)) {
        return true
    } else if (isFalse(f)) {
        return false
    } else {
        throw new Error(`Illegal argument 'f': ${f}.`)
    }
}

/**
 * Generates a substitution that makes subst(template) = inst, if one can
 * be generated. Throws a SyntacticMatchError if a substitution cannot be
 * generated.
 */
function syntacticMatch(template, inst) {
    if (isSyntacticEq(template, inst)) {
        return {}
    } else if (isVar(template)) {
        return {[template.name]: inst}
    } else if (isAnd(template) && isAnd(inst)) {
        let leftSubst = syntacticMatch(template.f1, inst.f1)
        let rightSubst = syntacticMatch(template.f2, inst.f2)
        return leftMerge(leftSubst, rightSubst, true)
    } else if (isOr(template) && isOr(inst)) {
        let leftSubst = syntacticMatch(template.f1, inst.f1)
        let rightSubst = syntacticMatch(template.f2, inst.f2)
        return leftMerge(leftSubst, rightSubst, true)
    } else if (isNot(template) && isNot(inst)) {
        return syntacticMatch(template.f, inst.f)
    }
    throw new SyntacticMatchError(`Couldn't match '${template}' with '${inst}`)
}

/**
 * A custom exception used in the successive variable elimination algorithm.
 */
class SVEError extends Error {
    constructor(message) {
        super(message);
        this.name = "Boolean Unification Failure";
    }
}

/**
 * A custom exception used to signal failure of syntactic matching special case.
 */
class SyntacticMatchError extends Error {
    constructor(message) {
        super(message);
        this.name = "Syntactic Match Failure";
    }
}
