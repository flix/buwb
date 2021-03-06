import {isBool} from "./Bools";
import {isTerm} from "./Terms";
import {boolUnify} from "./BoolUnification";

/**
 * Returns a substitution that unifies p and q (if it exists).
 */
export function unifyTerms(x, y) {
    // TODO: Variable case.

    if (isBool(x) && isBool(y)) {
        return boolUnify(x, y)
    } else if (isTerm(x) && isTerm(y)) {
        if (x.name === y.name) {
            return unifyTermLists(x.ts, y.ts)
        } else {
            return {status: "failure", reason: `Mismatched constructors: ${x.name} and ${y.name}.`}
        }
    } else {
        return {status: "failure", reason: `Mismatched kinds: ${x} and ${y}.`}
    }
}

/**
 * Returns a substitution that unifies the two term lists `xs` and `ys`.
 */
function unifyTermLists(xs, ys) {
    if (!Array.isArray(xs)) {
        throw new Error(`Illegal argument xs: ${xs}`)
    }
    if (!Array.isArray(ys)) {
        throw new Error(`Illegal argument ys: ${ys}`)
    }

    if (xs.length !== ys.length) {
        return {status: "failure", reason: `Mismatched constructor arity.`}
    }

    if (xs.length === 0) {
        // Return the empty substitution.
        return {}
    } else {
        // Pattern match on the two lists.
        let [x, ...xs1] = xs
        let [y, ...ys1] = ys

        let result = unifyTerms(x, y)
        if (result.status !== "success") {
            return result
        } else {
            let subst = result.subst

            // Apply the substitution to xs1 and ys1.
            let xs2 = xs1 // TODO
            let ys2 = ys1 // TODO

            let result1 = unifyTermLists(xs2, ys2)

            // TODO: Merge the substs.
            return result1
        }

    }
}
