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
import {isBool, minBool, showBool} from "./Bools";
import {applySubst, mergeSubst} from "./Substitution";
import {isConstructor, mkConstructor, showTerm} from "./Terms";

/**
 * Returns a substitution that unifies x and y (if it exists).
 */
export function unifyTerm(t1, t2, unifyBool) {
    if (t1 === undefined) {
        throw new Error(`Illegal argument 't1': ${t1}.`)
    }
    if (t2 === undefined) {
        throw new Error(`Illegal argument 't2': ${t2}.`)
    }

    if (isBool(t1) && isBool(t2)) {
        return unifyBool(t1, t2)
    } else if (isConstructor(t1) && isConstructor(t2)) {
        if (t1.name === t2.name) {
            return unifyTermLists(t1.ts, t2.ts, unifyBool)
        } else {
            return {status: "failure", reason: `Mismatched constructors: ${t1.name} and ${t2.name}.`}
        }
    } else if (isBool(t1) && isConstructor(t2)) {
        return {
            status: "failure",
            reason: `Mismatched kinds: Bool: ${showBool(t1)} and Constructor: ${showTerm(t2)}.`
        }
    } else if (isConstructor(t1) && isBool(t2)) {
        return {
            status: "failure",
            reason: `Mismatched kinds: Constructor: ${showTerm(t1)} and Bool: ${showBool(t2)}.`
        }
    } else {
        throw new Error(`Illegal arguments 't1': ${t1} and 't2': ${t2}.`)
    }
}

/**
 * Returns a substitution that unifies the two term lists `l1` and `l2`.
 */
function unifyTermLists(l1, l2, unifyBool) {
    if (!Array.isArray(l1)) {
        throw new Error(`Illegal argument l1: ${l1}`)
    }
    if (!Array.isArray(l2)) {
        throw new Error(`Illegal argument l2: ${l2}`)
    }

    if (l1.length !== l2.length) {
        return {status: "failure", reason: `Mismatched constructor arity: ${l1.length} vs. ${l2.length}.`}
    }

    if (l1.length === 0) {
        // Return the empty substitution.
        return {status: "success", subst: {}}
    } else {
        // Pattern match on the two lists.
        let [x, ...xs] = l1
        let [y, ...ys] = l2

        // Unify x and y.
        let result = unifyTerm(x, y, unifyBool)
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
            let result1 = unifyTermLists(xs1, ys1, unifyBool)

            if (result1.status !== "success") {
                // Failed. Return.
                return result1;
            } else {
                // Success. Compose substitutions.
                let subst1 = mergeSubst(result1.subst, subst)
                return {"status": "success", subst: subst1}
            }
        }

    }
}

/**
 * Returns a minimized version of the given `term`.
 *
 * Minimizes recursively if `recurse` is true.
 */
export function minimizeTerm(term, recurse) {
    if (term === undefined) {
        throw new Error(`Illegal argument 't': ${term}.`)
    }
    if (typeof recurse !== "boolean") {
        throw new Error(`Illegal argument 'recurse': ${recurse}.`)
    }

    if (isConstructor(term)) {
        return mkConstructor(term.name, term.ts.map(t => minimizeTerm(t, recurse)))
    } else if (isBool(term)) {
        return minBool(term, recurse)
    } else {
        throw new Error(`Illegal argument 'term': ${term}.`)
    }
}
