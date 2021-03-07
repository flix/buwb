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
import {mkAnd, mkNot, mkOr, mkVar, size, truthRow} from "./Bools.js";

/**
 * Generates Boolean formulas of the given depth and with the given array of variables.
 */
function* generate(depth, vars) {
    if (depth === 0) {
        for (let x of vars) {
            yield mkVar(x)
        }
    } else {
        for (let elm1 of generate(depth - 1, vars)) {
            yield elm1
            yield mkNot(elm1)
            for (let elm2 of generate(depth - 1, vars)) {
                yield elm2
                yield mkAnd(elm1, elm2)
                yield mkOr(elm1, elm2)
            }
        }
    }
}

/**
 * Builds a table of minimum Boolean formulas.
 */
export function buildTable(generator, fvs) {
    let table = {}
    for (let candidate of generator) {
        let key = truthRow(candidate, fvs)
        let current = table[key]
        if (current === undefined) {
            table[key] = candidate
        } else {
            let currentSize = current.size
            let candidateSize = size(candidate)
            if (currentSize > candidateSize) {
                table[key] = candidate
            }
        }
    }
    return table
}

/**
 * Generates a minimal table with the given number `n` of variables and the given `maxDepth`.
 */
function genTable(n, maxDepth) {
    let freeVars = []
    for (let i = 0; i < n; i++) {
        freeVars.push("x" + i)
    }

    let formulas = generate(maxDepth, freeVars)
    return buildTable(formulas, freeVars)
}

let table = {
    "1": genTable(1, 3),
    "2": genTable(2, 3),
    "3": genTable(3, 3),
    "4": genTable(4, 3),
}

console.log(JSON.stringify(table, null, '\t'))
