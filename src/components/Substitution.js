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
import {Card, CardBody, CardHeader, Table} from "reactstrap";
import {minimizeTerm} from "../TermUnification";
import Term from "./Term";

class Substitution extends Component {

    render() {
        let subst = this.props.subst
        let logicSymbols = this.props.logicSymbols
        let minimize = this.props.minimize
        let minimizeSubFormulas = this.props.minimizeSubFormulas
        let parenthesize = this.props.parenthesize

        return (
            <Card className="mt-3">
                <CardHeader>Substitution (Most General Unifier)</CardHeader>
                <CardBody>
                    <Table>
                        <thead>
                        <tr>
                            <th>Variable</th>
                            <th>Formula</th>
                        </tr>
                        </thead>
                        <tbody>
                        {subst.map(([varSym, term]) => (
                            <tr key={varSym}>
                                <td>{varSym}</td>
                                <td>{this.renderTerm(term, logicSymbols, minimize, minimizeSubFormulas, parenthesize)}</td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </CardBody>
            </Card>
        )
    }

    renderTerm(term, logicSymbols, minimize, minimizeSubFormulas, parenthesize) {
        if (minimize) {
            term = minimizeTerm(term, minimizeSubFormulas);
        }

        return <Term term={term} logicSymbols={logicSymbols} parenthesize={parenthesize}/>
    }

}

export default Substitution
