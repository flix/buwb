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
import {Card, CardBody, CardHeader, Row, Table} from "reactstrap";
import {minimizeTerm} from "../TermUnification";
import Term from "./Term";

class Substitution extends Component {

    render() {
        let subst = this.props.subst
        let logicSymbols = this.props.logicSymbols
        let minimize = this.props.minimize
        let minimizeSubFormulas = this.props.minimizeSubFormulas
        let minimizeQuineMcCluskey = this.props.minimizeQuineMcCluskey
        let parenthesize = this.props.parenthesize

        return (
            <Row className="col-12">
                <Card className="mt-3 w-100">
                    <CardHeader>Substitution (Most General Unifier)</CardHeader>
                    <CardBody>
                        <Table>
                            <thead>
                            <tr>
                                <th style={{width: "6rem"}}>Variable</th>
                                <th>Formula</th>
                            </tr>
                            </thead>
                            <tbody>
                            {subst.map(([varSym, term]) => (
                                <tr key={varSym}>
                                    <td>{varSym}</td>
                                    <td>{this.renderTerm(term, logicSymbols, minimize, minimizeSubFormulas, minimizeQuineMcCluskey, parenthesize)}</td>
                                </tr>
                            ))}
                            </tbody>
                        </Table>
                        <hr/>
                        <p className="small text-secondary" style={{"marginBottom": "0.2rem"}}>
                            <b>Note:</b> The solution to the Boolean Unification Problem is not always unique. We
                            compute <i>a</i> most general unifier (mgu) but there may be (infinitely) many other most
                            general unifiers. However, if there are, they are all equi-most general (each can be
                            obtained as an instance of the other, and vise versa).
                        </p>
                    </CardBody>
                </Card>
            </Row>
        )
    }

    renderTerm(term, logicSymbols, minimize, minimizeSubFormulas, minimizeQuineMcCluskey, parenthesize) {
        if (minimize) {
            term = minimizeTerm(term, minimizeSubFormulas, minimizeQuineMcCluskey);
        }

        return <Term term={term} logicSymbols={logicSymbols} parenthesize={parenthesize}/>
    }

}

export default Substitution
