import {FALSE, freeVars, isFalse, isTrue, mkAnd, mkNot, mkOr, mkVar, showBool, TRUE} from "./Bools.js";
import {applySubst} from "./Substitution";

/**
 * Returns a substitution that unifies p and q (if it exists).
 */
export function boolUnify(p, q) {
    // The boolean expression we want to show is 0.
    let query = mkOr(mkAnd(p, mkNot(q)), mkAnd(mkNot(p), q))

    // The free variables in the query.
    let fvs = freeVars(query)

    try {
        let subst = successiveVariableElimination(query, fvs)
        return {status: "success", subst: subst}
    } catch (e) {
        if (e instanceof SVEError) {
            return {status: "failure", reason: `Cannot unify: ${showBool(p)} and ${showBool(q)}`}
        } else {
            throw e
        }
    }
}

/**
 * Returns a substitution that falsifies `f` (or reports that no such substitution exists).
 */
function successiveVariableElimination(f, fvs) {
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
        return mergeSubst(st, se)
    }
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

function mergeSubst(s1, s2) {
    let result = {}
    for (let [key, value] of Object.entries(s1)) {
        result[key] = value
    }
    for (let [key, value] of Object.entries(s2)) {
        if (s2[key] !== undefined) {
            result[key] = value
        }
    }
    return result
}

/**
 * Returns `true` if the given Boolean formula `f` is true.
 */
function satisfiable(f) {
    if (isTrue(f)) {
        return true
    } else if (isFalse(f)) {
        return false
    } else {
        throw Error(`Illegal argument 'f': ${f.toString()}.`)
    }
}
