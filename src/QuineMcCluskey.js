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
import { boolFreeVars, isFalse, isTrue, mkAnd, mkOr, mkNot, mkVar, TRUE, FALSE, truthTable, showBool } from "./Bools.js";


/**
 * Truth rows for implicants may contain a DASH '-' during reduction to
 * the set of prime implicants, which is used to track where overlaps occur
 * during reduction iteration steps.
 */
export let DASH = {type: '-'}

/**
 * Generates a minimal Boolean equation equivalent to the given Boolean equation, in
 * sum of product form. The major steps of the algorithm:
 * 1. compute initial minTerms via truth table
 * 2. iteratively generate set of prime implicants
 * 3. determine essential prime implicants
 * 4. for remaining minTerms uncovered by essential implicants, find a covering
 *    implicant using Petricks method
 */
export function quineMcCluskeyMinimize(term) {
    console.log('reducing: ', showBool(term))
    let free = boolFreeVars(term)
    let truth = truthTable(term, free)

    // minTerms are elements of the truth table where the result is T.
    // Using pop() here also removes the truth column element since we
    // don't want it when comparing rows.
    let minTerms = truth.filter(row => isTrue(row.pop()))
    let namedMinTerms = minTerms.map(row => { return { name: rowToInt(row).toString(), row: row }; })

    // get the set of prime implicants from the minTerms
    let primes = primeImplicants(namedMinTerms)
    // find which implicants are essential prime implicants; these must
    // be included because they are the only implicants that cover certain minTerms
    let { essentials, covered, remaining, uncovered } = essentialPrimes(primes, namedMinTerms)
    // for the remaining uncovered minTerms, there are ambiguities in which should be chosen
    // Petrick's method is a way to systematically compute the result
    if (uncovered.length > 0) {
        let selectedImplicants = petricks(remaining, uncovered)
        essentials = essentials.concat(selectedImplicants)
    }
    
    // convert back to a bool term
    let finalTerm = []
    for (let e of essentials) {
        let subTerm = e.row.reduce((sub, rowElem, rowInd) => {
            if (isTrue(rowElem)) {
                return mkAnd(sub, mkVar(free[rowInd]))
            } else if (isFalse(rowElem)) {
                return mkAnd(sub, mkNot(mkVar(free[rowInd])))
            }
            return sub
        }, TRUE)
        finalTerm.push(subTerm)
    }
    return finalTerm.reduce((final, sub) => mkOr(final, sub), FALSE)
}

/**
 * Given a set of named minTerms for a Boolean equation, generates the set
 * of implicants that cannot be 'covered' by a 'more general' implicant, i.e.
 * the set of prime implicants. Note that these prime implicants are not
 * necessarily essential; some of them may overlap with each other with respect
 * to the original equation, but none can be further reduced according to the
 * given set of minTerms.
 * 
 * The process here is iterative, checking off elements that reduce, accumulating
 * those that do not, and repeating on the set of new reduced elements until no
 * further reductions can take place.
 * 
 * Returned implicants will be sorted such that the implicant that covers the most
 * minTerms will be first.
 */
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
    let iterSteps = 1

    do {
        let newRemaining = []
        checked.length = 0

        // don't iterate over the last row, there's nothing beyond to compare it to
        for (let i = 0; i < remaining.length - 1; i++) {
            for (let row of remaining[i]) {
                // compare this row against all rows in the following group
                let { implicants, matched } = compareRowAgainst(row, remaining[i+1])
                // save matched implicants so we know not to make them prime
                if (matched.length > 0) {
                    checked.push(row)
                }
                checked = checked.concat(matched)
                // save generated implicants to iterate over them next
                newRemaining = newRemaining.concat(implicants)
            }
        }

        checked = dedupImplicantsByRow(checked)
        newRemaining = dedupImplicantsByRow(newRemaining)

        // one last iteration over each row to determine if it was matched with another
        // if not, add it to the prime set
        for (let i = 0; i < remaining.length; i++) {
            for (let row of remaining[i]) {
                // if the row wasn't checked, it's a prime implicant
                if (!checked.some(c => c.name === row.name)) {
                    primes.push(row)
                }
            }
        }

        iterSteps += 1
        remaining = groupBy(newRemaining, named => trueCountInRow(named.row))
    } while(checked.length > 0)

    // bigger names in front, so that de-duplicating chooses the one that covers
    // the most minTerms
    primes.sort((l, r) => r.name.length - l.name.length)
    return dedupImplicantsByRow(primes)
}

/**
 * Given two lists of (maybe dashed) Boolean values, checks whether they differ zipwise
 * by one element. If they do, this returns an object indicating that the rows differed
 * by one, as well as the compared row with the difference replaced by a dash. If they
 * differ by more or less than one, return an object indicating as such with no result row.
 */
 function tryGenerateComparedRow(left, right) {
    let difference = false
    let row = []
    for (let i = 0; i < left.length; i++) {
        if (left[i] != right[i]) {
            // have we already seen a difference? if so, these rows are too different
            if (difference) {
                return { compared: false }
            }
            difference = true
            row.push(DASH)
        } else {
            row.push(left[i])
        }
    }
    return difference ? { compared: true, row: row } : { compared: false }
}

/**
 * Compares `row` against the rows in `others` to determine which differ by
 * one elements. Returns an object containing those rows in `others` which
 * differed from `row` by only one element, alongisde those same rows with
 * the differing element replaced by a dash (the generated implicant).
 */
function compareRowAgainst(row, others) {
    let implicants = []
    let matched = []
    for (let other of others) {
        // generate a new implicant with non-matching elements replaced by '-'
        let cmp = tryGenerateComparedRow(row.row, other.row)
        if (cmp.compared) {
            let nameLeft = row.name.split(",")
            let nameRight = other.name.split(",")
            let newName = [...new Set(nameLeft.concat(nameRight))].join(",")
            implicants.push({ name: newName, row: cmp.row })
            matched.push(other)
        }
    }
    return { implicants: implicants, matched: matched }
}

/**
 * Given a set of prime implicants, and a set of minTerms that they collectively cover,
 * returns the implicants which are 'essential'. An essential implicant is one which covers
 * one of the minTerms and is the only implicant to cover that minTerm.
 */
export function essentialPrimes(primes, minTerms) {
    let essentials = []
    let covered = []
    let remaining = []
    let uncovered = []
    let primeNames = primes.map(p => [...new Set(p.name.split(","))])
    for (let m of minTerms) {
        let checks = primeNames
            .map((ns, i) => { return { names: ns, index: i }; })
            .filter(obj => obj.names.includes(m.name))
            .map(obj => obj.index)
        if (checks.length === 1) {
            essentials.push(primes[checks[0]])
            covered = covered.concat(primeNames[checks[0]])
        }
    }

    essentials = dedupImplicantsByName(essentials)

    // determine which prime implicants and minterms are remaining to be investigated
    for (let p of primes) {
        if (!essentials.some(e => p.name === e.name)) {
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

/**
 * Given a set of prime implicants and minTerms where each minTerm is covered by
 * at least two implicants, Petrick's method constructs a minimum sum-of-product
 * term that covers all the given minTerms. The smallest term of this sum-of-product
 * is returned as the minimal set of covering implicants.
 */
export function petricks(primes, minTerms) {
    let product = productOfSums(primes, minTerms)
    let sum = productOfSumsToSumOfProducts(product)
    // bring a smallest length term to the front so we can select it
    sum.sort((l, r) => l.length - r.length)
    // the sums is a list of list of string, we need to bring it back to the implicant
    let implicants = []
    for (let name of sum[0]) {
        implicants.push(primes.filter(p => p.name === name)[0])
    }
    return implicants
}

/**
 * Given a set of prime implicants and a set of minTerms, constructs
 * a Boolean equation of the form ((b11+b12+b13+...)(b21+b22+b23+...)...(bn1+bn2+bn3+...))
 * such that each sum b[i] contains the primes that cover minTerm[i]. Each b[i][j] is the name
 * of the prime implicant, not the named row object representing the prime implicant itself,
 * to make comparison easy during expansion. The names will be translated back into named
 * implicant objects in the final step of Petricks.
 */
export function productOfSums(primes, minTerms) {
    let products = []
    for (let m of minTerms) {
        let sums = []
        for (let p of primes) {
            if (p.name.split(",").includes(m.name)) {
                sums.push(p.name)
            }
        }
        products.push(sums)
    }
    return products
}

/**
 * Converts a product of sums (represented in list of lists of terms form) into an equivalent sum
 * of products, applying some reduction laws to minify the result sum. Returns the new sum of
 * products as a list of lists of terms.
 */
export function productOfSumsToSumOfProducts(products) {
    let prodCopy = [...products]
    let sums = [prodCopy.pop()]
    while (prodCopy.length > 0) {
        let term = prodCopy.pop()
        let newSums = []
        for (let t of term) {
            for (let s of sums) {
                if (s.includes(t)) {
                    newSums.push(s)
                } else {
                    newSums.push([t,...s])
                }
            }
        }
        sums = newSums
    }
    return reduceByAbsorption(sums)
}

/**
 * Given a sum of products (represented as a list of lists of terms) removes redundant products
 * by applying the absorption laws (X+XY) = X. The result is still a sum of products.
 */
function reduceByAbsorption(sums) {
    let reduced = []
    while (sums.length > 0) {
        let product = sums.pop()
        if (sums.some(s => productIsSubset(s, product)) || reduced.some(s => productIsSubset(s, product))) {
            continue
        }
        reduced.push(product)
    }
    return reduced
}

/**
 * Returns whether a product of Boolean terms is a subset of another Boolean product.
 */
function productIsSubset(test, cmp) {
    return test.every(prime => cmp.includes(prime))
}

/**
 * Given a list of implicants, returns a new list where elements with the same name have been
 * deduplicated.
 */
function dedupImplicantsByName(rows) {
    return dedupBy((item, cmp) => item.name === cmp.name, rows)
}

/**
 * Given a list of implicants, returns a new list where elements with the same truth row
 * have been deduplicated.
 */
function dedupImplicantsByRow(rows) {
    return dedupBy((item, cmp) => item.row.every((rElem, ind) => cmp.row[ind] === rElem), rows)
}

/**
 * Given a list of True and False values, converts the list to a number as if the
 * list was a bitwise representation of the number.
 */
 function rowToInt(row) {
    return row.reduce((res, val, ind) => res + (val === TRUE ? 1 << ind : 0), 0)
}

/**
 * Given a row entry from a truth table, returns the number of elements
 * in the row that are True.
 */
 function trueCountInRow(row) {
    return row.reduce((ts, e) => ts + (isTrue(e) ? 1 : 0), 0)
}

/**
 * Group the items in a list into a list of lists based on a predicate that returns the index
 * of the sublist to which the item belongs.
 */
 function groupBy(items, pred) {
    return items.reduce(function(groups, item) {
        const val = pred(item)
        groups[val] = groups[val] || []
        groups[val].push(item)
        return groups
    }, []).filter(val => val !== undefined)
}

/**
 * Removes duplicates from the given sequence based on the supplied comparison predicate.
 * If two elements are considered duplicates, the leftmost in the original sequence is kept.
 * Returns a new list rather than modifying the input.
 */
 function dedupBy(pred, seq) {
    var seen = [];
    for (let item of seq) {
        let add = true
        for (let s of seen) {
            if (pred(item, s)) {
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