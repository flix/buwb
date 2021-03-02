import {TRUE, FALSE, isFalse, isTrue, mkAnd, mkNot, mkOr, mkVar, size, show, truthRow} from "./Bools.js";
import {applySubst} from "./Unification.js";

export function buildLookupTable(generator, fvs) {
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

// TODO: Prune the search tree based on how many times the same variable can occur.

function genTable(n, maxDepth) {
    let freeVars = []
    for (let i = 0; i < n; i++) {
        freeVars.push("x" + i)
    }
    //console.log(`Variables = ${freeVars}`)

    let formulae = generate(maxDepth, freeVars)
    let table = buildLookupTable(formulae, freeVars)
    //console.log("Lookup Table Size  = ", Object.keys(table).length)

    return table
}

let table = {
    "1": genTable(1, 3),
    "2": genTable(2, 3),
    "3": genTable(3, 3),
    "4": genTable(4, 3),
}

console.log(JSON.stringify(table, null, '\t'))
