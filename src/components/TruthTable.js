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
import {isTrue} from "../Bools";

class TruthTable extends Component {

    render() {
        let fvs = this.props.freeVars
        let tt = this.props.truthTable

        return (
            <Row className="col-12">
                <Card className="mt-3 w-100">
                    <CardHeader>Truth Table</CardHeader>
                    <CardBody>
                        <Table borderless size="sm">
                            <thead>
                            <tr>
                                {fvs.map(f => <th>{f}</th>)}
                                <th>R</th>
                            </tr>
                            </thead>
                            <tbody>
                            {tt.map(row => {
                                let className = isTrue(row[row.length - 1]) ? "table-active" : ""
                                return <tr className={className}>
                                    {row.map((t, index) => isTrue(t) ? <td key={index}>T</td> : <td key={index}>F</td>)}
                                </tr>
                            })}
                            </tbody>
                        </Table>
                    </CardBody>
                </Card>
            </Row>)
    }

}

export default TruthTable
