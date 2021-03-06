/**
 * Returns `true` if the given `x` is a constructor.
 */
export function isConstructor(x) {
    return x.type === 'CONST'
}

/**
 * Returns the term with name `s` and inner term `t`.
 */
export function mkConstructor(n, ts) {
    if (typeof n !== "string") {
        throw Error(`Illegal argument n: ${n}.`)
    }
    if (!Array.isArray(ts)) {
        throw Error(`Illegal argument ts: ${ts}.`)
    }

    return {type: 'CONST', name: n, ts: ts}
}
