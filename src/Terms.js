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
import {boolFreeVars, isBool, showBool} from "./Bools";

/**
 * Returns `true` if the given `x` is a constructor.
 */
export function isConstructor(x) {
    return x.type === 'CONST'
}

/**
 * Returns a constructor term with the given `name` and sub `terms`.
 */
export function mkConstructor(name, terms) {
    if (typeof name !== "string") {
        throw new Error(`Illegal argument 'name': ${name}.`)
    }
    if (!Array.isArray(terms)) {
        throw new Error(`Illegal argument 'terms': ${terms}.`)
    }

    return {type: 'CONST', name: name, ts: terms}
}

/**
 * Returns a human readable representation of the given `term`.
 */
export function showTerm(term) {
    if (term === undefined) {
        throw new Error(`Illegal argument 'term': ${term}.`)
    }

    if (isBool(term)) {
        return showBool(term)
    } else if (isConstructor(term)) {
        let terms = term.ts.map(t => showTerm(t)).join(", ")
        if (terms.length === 0) {
            return term.name
        } else {
            return `${term.name}(${terms})`
        }
    } else {
        throw new Error(`Illegal argument 'term': ${term}.`)
    }
}

/**
 * Returns all the free variables in the given term.
 */
export function termFreeVars(term) {
    if (term === undefined) {
        throw new Error(`Illegal argument 'term': ${term}.`)
    }

    if (isBool(term)) {
        return boolFreeVars(term)
    } else if (isConstructor(term)) {
        return term.ts.map(t => termFreeVars(t)).flat()
    } else {
        throw new Error(`Illegal argument 'term': ${term}.`)
    }
}
