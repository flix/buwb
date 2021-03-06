import {FALSE, isAnd, isFalse, isNot, isOr, isTrue, isVar, mkAnd, mkNot, mkOr, mkVar, TRUE} from "./Bools";
import {isConstructor, mkConstructor} from "./Terms";

/**
 * Applies the given substitution `subst` to the given `term`.
 */
export function applySubst(subst, term) {
    if (typeof subst !== "object") {
        throw new Error(`Illegal argument 'subst': ${subst}.`)
    }
    if (term === undefined) {
        throw new Error(`Illegal argument 'term': ${term}.`)
    }

    if (isConstructor(term)) {
        return mkConstructor(term.name, term.ts.map(t => applySubst(subst, t)))
    } else if (isTrue(term)) {
        return TRUE
    } else if (isFalse(term)) {
        return FALSE
    } else if (isVar(term)) {
        if (subst[term.name] !== undefined)
            return subst[term.name]
        else
            return mkVar(term.name)
    } else if (isNot(term)) {
        return mkNot(applySubst(subst, term.f))
    } else if (isAnd(term)) {
        return mkAnd(applySubst(subst, term.f1), applySubst(subst, term.f2))
    } else if (isOr(term)) {
        return mkOr(applySubst(subst, term.f1), applySubst(subst, term.f2))
    } else {
        throw Error(`Unexpected argument 'term': ${term}.`)
    }
}

/**
 * Returns the composition of the two substitutions `subst1` with `subst2`.
 */
export function mergeSubst(subst1, subst2) {
    if (typeof subst1 !== "object") {
        throw new Error(`Illegal argument 'subst1': ${subst1}.`)
    }
    if (typeof subst2 !== "object") {
        throw new Error(`Illegal argument 'subst2': ${subst2}.`)
    }

    let keys1 = Object.keys(subst1);
    let keys2 = Object.keys(subst2);

    let result = {}
    for (let key of keys2) {
        result[key] = applySubst(subst1, subst2[key])
    }

    for (let key of keys1) {
        if (subst2[key] === undefined) {
            result[key] = subst1[key]
        }
    }

    return result
}
