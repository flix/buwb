import {
    FALSE,
    freeVars,
    isFalse,
    isTrue,
    mkAnd,
    mkNot,
    mkOr,
    mkVar,
    show,
    TRUE
} from "./Bools.js";
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
        return {status: "failure", reason: e.toString()}
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
            throw Error("Unification Error")
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

function satisfiable(q) {
    if (isTrue(q)) {
        return true
    } else if (isFalse(q)) {
        return false
    } else {
        console.log("Formula", show(q))
        throw Error(`Unexpected formula ${q}.`)
    }
}
