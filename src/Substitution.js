import {FALSE, isAnd, isFalse, isNot, isOr, isTrue, isVar, mkAnd, mkNot, mkOr, mkVar, TRUE} from "./Bools";
import {isConstructor, mkConstructor} from "./Terms";

/**
 * Applies the given substitution `subst` to `f`.
 */
export function applySubst(subst, f) {
    if (subst === undefined) {
        throw new Error(`Illegal argument subst: ${subst}.`)
    }
    if (f === undefined) {
        throw new Error(`Illegal argument f: ${f}.`)
    }

    if (isConstructor(f)) {
        return mkConstructor(f.name, f.ts.map(t => applySubst(subst, t)))
    } else if (isTrue(f)) {
        return TRUE
    } else if (isFalse(f)) {
        return FALSE
    } else if (isVar(f)) {
        if (subst[f.name] !== undefined)
            return subst[f.name]
        else
            return mkVar(f.name)
    } else if (isNot(f)) {
        return mkNot(applySubst(subst, f.f))
    } else if (isAnd(f)) {
        return mkAnd(applySubst(subst, f.f1), applySubst(subst, f.f2))
    } else if (isOr(f)) {
        return mkOr(applySubst(subst, f.f1), applySubst(subst, f.f2))
    } else {
        throw Error(`Unexpected argument: ${f}.`)
    }
}

/**
 * Returns the composition of `s1` with `s2`.
 */
export function mergeSubsts(s1, s2) {
    let keys1 = Object.keys(s1);
    let keys2 = Object.keys(s2);

    let result = {}
    for (let key of keys2) {
        result[key] = applySubst(s1, s2[key])
    }

    for (let key of keys1) {
        if (s2[key] === undefined) {
            result[key] = s1[key]
        }
    }

    return result
}
