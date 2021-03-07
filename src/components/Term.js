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
import React, {Component} from "react";
import {isConstructor} from "../Terms";
import {isAnd, isFalse, isNot, isOr, isTrue, isVar} from "../Bools";
import {precedence} from "../Precedence";

class Term extends Component {

    render() {
        let term = this.props.term
        let logicSymbols = this.props.logicSymbols
        let parenthesize = this.props.parenthesize

        let lparen = <span className="lparen">(</span>;
        let rparen = <span className="rparen">)</span>;
        let neg = (logicSymbols) ? "¬" : "not "
        let conj = (logicSymbols) ? "∧" : "and"
        let disj = (logicSymbols) ? "∨" : "or"

        function visit(x) {
            if (isConstructor(x)) {
                return x.name;
            } else if (isVar(x)) {
                return x.name;
            } else if (isTrue(x)) {
                return "true"
            } else if (isFalse(x)) {
                return "false"

            } else if (isNot(x)) {
                let withParens = precedence(x.f.type) >= precedence("NOT");
                if (withParens || parenthesize) {
                    return <span>{neg}{lparen}{visit(x.f)}{rparen}</span>
                } else {
                    return <span>{neg}{visit(x.f)}</span>
                }
            } else if (isAnd(x)) {
                let withLParens = precedence(x.f1.type) >= precedence("AND");
                let withRParens = precedence(x.f2.type) >= precedence("AND");
                if ((withLParens && withRParens) || parenthesize) {
                    return <span>{lparen}{visit(x.f1)}{rparen} {conj} {lparen}{visit(x.f2)}{rparen}</span>
                } else if (withLParens) {
                    return <span>{lparen}{visit(x.f1)}{rparen} {conj} {visit(x.f2)}</span>
                } else if (withRParens) {
                    return <span>{visit(x.f1)} {conj} {lparen}{visit(x.f2)}{rparen}</span>
                } else {
                    return <span>{visit(x.f1)} {conj} {visit(x.f2)}</span>
                }
            } else if (isOr(x)) {
                let withLParens = precedence(x.f1.type) >= precedence("OR");
                let withRParens = precedence(x.f2.type) >= precedence("OR");
                if ((withLParens && withRParens) || parenthesize) {
                    return <span>{lparen}{visit(x.f1)}{rparen} {disj} {lparen}{visit(x.f2)}{rparen}</span>
                } else if (withLParens) {
                    return <span>{lparen}{visit(x.f1)}{rparen} {disj} {visit(x.f2)}</span>
                } else if (withRParens) {
                    return <span>{visit(x.f1)} {disj} {lparen}{visit(x.f2)}{rparen}</span>
                } else {
                    return <span>{visit(x.f1)} {disj} {visit(x.f2)}</span>
                }
            } else {
                throw new Error(`Unexpected argument: ${x}.`)
            }
        }

        return visit(term)
    }
}

export default Term
