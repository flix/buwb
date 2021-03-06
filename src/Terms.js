/**
 * Returns `true` if the given `x` is a term.
 */
export function isTerm(x) {
    return x.type === 'TERM'
}

/**
 * Returns the term with name `s` and inner term `t`.
 */
export function mkTerm(s, t) {
    if (typeof s !== "string") {
        throw Error(`Unexpected non-string: ${s} of type ${typeof s}.`)
    }
    if (t === undefined) {
        throw Error(`Illegal argument : ${t}.`)
    }

    return {type: 'TERM', name: s, t: t}
}
