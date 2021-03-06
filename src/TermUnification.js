import {isBool, minBool} from "./Bools";
import {isConstructor, mkConstructor} from "./Terms";
import {boolUnify} from "./BoolUnification";
import {applySubst, mergeSubsts} from "./Substitution";

/**
 * Returns a substitution that unifies p and q (if it exists).
 */
export function unifyTerms(x, y) {
    if (isBool(x) && isBool(y)) {
        return boolUnify(x, y)
    } else if (isConstructor(x) && isConstructor(y)) {
        if (x.name === y.name) {
            return unifyTermLists(x.ts, y.ts)
        } else {
            return {status: "failure", reason: `Mismatched constructor names: ${x.name} and ${y.name}.`}
        }
    } else {
        return {status: "failure", reason: `Mismatched kinds: ${JSON.stringify(x)} and ${JSON.stringify(y)}.`}
    }
}

/**
 * Returns a substitution that unifies the two term lists `l1` and `l2`.
 */
function unifyTermLists(l1, l2) {
    if (!Array.isArray(l1)) {
        throw new Error(`Illegal argument l1: ${l1}`)
    }
    if (!Array.isArray(l2)) {
        throw new Error(`Illegal argument l2: ${l2}`)
    }

    if (l1.length !== l2.length) {
        return {status: "failure", reason: `Mismatched constructor arity.`}
    }

    if (l1.length === 0) {
        // Return the empty substitution.
        return {status: "success", subst: {}}
    } else {
        // Pattern match on the two lists.
        let [x, ...xs] = l1
        let [y, ...ys] = l2

        // Unify x and y.
        let result = unifyTerms(x, y)
        if (result.status !== "success") {
            // Failed. Return immediately.
            return result
        } else {
            // Success. Retrieve the substitution.
            let subst = result.subst

            // Apply the substitution to xs1 and ys1.
            let xs1 = xs.map(t => applySubst(subst, t))
            let ys1 = ys.map(t => applySubst(subst, t))

            // Recursive unify xs1 and ys1.
            let result1 = unifyTermLists(xs1, ys1)

            if (result1.status !== "success") {
                // Failed. Return.
                return result1;
            } else {
                // Success. Compose substitutions.
                let subst1 = mergeSubsts(result1.subst, subst)
                return {"status": "success", subst: subst1}
            }
        }

    }
}

/**
 * Return a minimized term.
 */
export function minTerm(x, recursively) {
    if (typeof recursively !== "boolean") {
        throw new Error(`Illegal argument recursively: ${recursively}.`)
    }
    if (isBool(x)) {
        return minBool(x, recursively)
    } else if (isConstructor(x)) {
        return mkConstructor(x.name, x.ts.map(t => minTerm(t, recursively)))
    } else {
        throw new Error(`Illegal argument x: ${x}.`)
    }
}
