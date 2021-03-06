import {FALSE, isAnd, isFalse, isNot, isOr, isTrue, isVar, mkAnd, mkNot, mkOr, mkVar, TRUE} from "./Bools";

/**
 * Applies the given substitution `subst` to `f`.
 */
export function applySubst(subst, f) {
    if (isTrue(f)) {
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
