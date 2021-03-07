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
/**
 * Returns the precedence of the given connective `x`.
 */
export function precedence(x) {
    switch (x) {
        case "VAR":
            return 0
        case "TRUE":
            return 0
        case "FALSE":
            return 0
        case "NOT":
            return 1
        case "AND":
            return 2
        case "OR":
            return 2
        default:
            throw new Error(`Unexpected argument: ${x}.`)
    }
}
