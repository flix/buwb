/**
 * Returns `true` if the given `x` is a term.
 */
export function isTerm(x) {
    return x.type === 'TERM'
}

/**
 * Returns the term with name `s` and inner term `t`.
 */
export function mkTerm(n, ts) {
    if (typeof n !== "string") {
        throw Error(`Illegal argument n: ${n}.`)
    }
    if (!Array.isArray(ts)) {
        throw Error(`Illegal argument ts: ${ts}.`)
    }

    return {type: 'TERM', name: n, ts: ts}
}
