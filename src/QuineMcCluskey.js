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
import {applySubst} from "./Substitution.js";
import {Table} from "./Table"
import { boolFreeVars, TRUE, truthTable } from "./Bools.js";


export let DASH = {type: '-'}

function groupBy(items, pred) {
    return items.reduce(function(groups, item) {
        const val = pred(item)
        groups[val] = groups[val] || []
        groups[val].push(item)
        return groups
    }, [])
}

function rowToInt(row) {
    return row.reduce((res, val, ind) => res + (val === TRUE ? 1 << ind : 0), 0)
}

/**
 * Given a row entry from a truth table, returns the number of elements
 * in the row that are True.
 */
function trueCountInRow(row) {
    return row.reduce((ts, e) => ts + (e === TRUE ? 1 : 0), 0)
}

function dashCountInRow(row) {
    return row.reduce((ts, e) => ts + (e === DASH ? 1 : 0), 0)
}

/**
 * Compares `row` against the rows in `others` to determine which differ by
 * one elements. Returns an object containing those rows in `others` which
 * differed from `row` by only one element, alongisde those same rows with
 * the differing element replaced by a dash (the generated implicant).
 */
function compareRowAgainst(row, others, expectedDashes) {
    let implicants = []
    let matched = []
    for (let other of others) {
        // generate a new implicant with non-matching elements replaced by '-'
        let test = row.row.map((elem, ind) => elem === other.row[ind] ? elem : DASH)
        if (dashCountInRow(test) === expectedDashes) {
            implicants.push({ name: row.name + "," + other.name, row: test })
            matched.push(other)
        }
    }
    return { implicants: implicants, matched: matched }
}

function dedupRowSet(rows) {
    var seen = [];
    for (let item of rows) {
        let add = true
        for (let s of seen) {
            if (item.name === s.name) {
                add = false
                break
            }
        }
        if (add) {
            seen.push(item)
        }
    }
    return seen
}

export function quineMcCluskeyMinimize(term) {
    let free = boolFreeVars(term)
    let truth = truthTable(term, free)

    // minTerms are elements of the truth table where the result is T.
    // Using pop() here also removes the truth column element since we
    // don't want it when comparing rows.
    let minTerms = truth.filter(row => row.pop() === TRUE)
    let namedMinTerms = minTerms.map(row => { name: rowToInt(row).toString(), row: row })

    let primes = primeImplicants(namedMinTerms)
    let chart = implicantChart(primes, namedMinTerms)
    let { essentials, covered, remaining, uncovered } = essentialPrimes(primes, namedMinTerms)
}

export function primeImplicants(namedMinTerms) {
    // Group the minTerms by the number of T elements each row contains.
    // We will compare rows with no Ts against rows with one T, rows with
    // one T against rows with two Ts, and so on...
    let grouped = groupBy(namedMinTerms, named => trueCountInRow(named.row))

    // keep reducing as long as there are terms with only one differing row element
    let primes = []
    let remaining = grouped
    let checked = []
    // keep track of how many iterations we've performed; equivalent to the number
    // of dashes in the remaining minTerms
    let iterSteps = 0

    do {
        let newRemaining = []
        checked.length = 0

        // don't iterate over the last row, there's nothing beyond to compare it to
        for (let i = 0; i < remaining.length - 1; i++) {
            for (let row of remaining[i]) {
                // compare this row against all rows in the following group
                let { implicants, matched } = compareRowAgainst(row, remaining[i+1], iterSteps)
                // save matched implicants so we know not to make them prime
                if (matched.length > 0) {
                    checked.push(row)
                }
                checked = checked.concat(matched)
                // save generated implicants to iterate over them next
                newRemaining = newRemaining.concat(implicants)
            }
        }

        dedupRowSet(checked)
        dedupRowSet(newRemaining)

        // one last iteration over each row to determine if it was matched with another
        // if not, add it to the prime set
        for (let i = 0; i < remaining.length; i++) {
            for (let row of remaining[i]) {
                // if the row wasn't checked, it's a prime implicant
                if (checked.filter(c => c.name == row.name).length < 1) {
                    primes.push(row)
                }
            }
        }

        iterSteps += 1
        remaining = newRemaining
    } while(checked.length > 0)

    dedupRowSet(primes)
    return primes
}

export function implicantChart(primes, minTerms) {
    let chart = []
    for (let p of primes) {
        let row = []
        let names = p.name.split(",")
        for (let m of minTerms) {
            row.push(names.includes(m.name) ? true : false)
        }
        chart.push(p)
    }
    return chart
}

export function essentialPrimes(primes, minTerms) {
    let essentials = []
    let covered = []
    let remaining = []
    let uncovered = []
    let primeNames = primes.map(p => p.name.split(","))
    for (let m of minTerms) {
        let checks = []
        primeNames.forEach((ns, i) => {
            if (ns.includes(m.name)) {
                checks.push[i]
            }
        });
        if (checks.length === 1) {
            essentials.push(primes[checks[0]])
            covered.concat(primeNames[checks[0]])
        }
    }

    // determine which prime implicants and minterms are remaining to be investigated
    for (let p of primes) {
        if (essentials.filter(e => p.name == e.name).length < 1) {
            remaining.push(p)
        }
    }
    for (let m of minTerms) {
        if (!covered.includes(m.name)) {
            uncovered.push(m)
        }
    }
    return { essentials, covered, remaining, uncovered }
}