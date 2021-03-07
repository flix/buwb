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
import React, {Component} from 'react';
import './App.css';
import {truthTable, freeVars} from "./Bools";
import {parse} from "./Parser";
import {unifyTerm} from "./TermUnification";

import {
    Card,
    CardHeader,
    CardBody,
    CustomInput,
    Col,
    Container,
    Form,
    FormGroup,
    FormFeedback,
    Input,
    Row
} from "reactstrap";
import {applySubst} from "./Substitution";
import Header from "./components/Header";
import Summary from "./components/Summary";
import Substitution from "./components/Substitution";
import TruthTable from "./components/TruthTable";
import UnificationFailure from "./components/UnificationFailure";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lhsInput: "",
            rhsInput: "",
            lhsParsed: {valid: undefined},
            rhsParsed: {valid: undefined},
            result: undefined,
            formatInput: true,
            logicSymbols: true,
            minimize: true,
            minimizeSubFormulas: true,
            showTruthTable: false,
            parenthesize: false,
        }
    }

    notifyLHS(e) {
        let lhsInput = this.format(e.target.value);
        this.setState({lhsInput: lhsInput})
        try {
            let parseResult = parse(lhsInput)
            this.setState({lhsParsed: {valid: true, value: parseResult}})
            if (this.state.rhsParsed.valid) {
                this.solve(parseResult, this.state.rhsParsed.value)
            }
        } catch (e) {
            console.log(e)
            this.setState({result: undefined, lhsParsed: {valid: false, error: e.toString()}})
        }
    }

    notifyRHS(e) {
        let rhsInput = this.format(e.target.value);
        this.setState({rhsInput: rhsInput})
        try {
            let parseResult = parse(rhsInput)
            this.setState({rhsParsed: {valid: true, value: parseResult}})
            if (this.state.lhsParsed.valid) {
                this.solve(this.state.lhsParsed.value, parseResult)
            }
        } catch (e) {
            console.log(e)
            this.setState({result: undefined, rhsParsed: {valid: false, error: e.toString()}})
        }
    }

    solve(x, y) {
        let result = unifyTerm(x, y)
        if (result.status === "success") {
            // Compute the free variables in the input lhs and rhs.
            let vars = new Set()
            freeVars(x).forEach(v => vars.add(v))
            freeVars(y).forEach(v => vars.add(v))
            let fvs = [...vars].sort()

            // Compute the truth table. (It does not matter if we use x or y).
            let f = applySubst(result.subst, x)
            let tt = truthTable(f, fvs)
            this.setState({result: {freeVars: fvs, truthTable: tt, ...result}})
        } else {
            this.setState({result: result})
        }
    }

    format(x) {
        if (!this.state.formatInput) {
            return x
        }

        return x
            .replaceAll("not", "¬")
            .replaceAll("neg", "¬")
            .replaceAll("and", "∧")
            .replaceAll("or", "∨")
    }

    toggleFormatInput() {
        this.setState({formatInput: !this.state.formatInput})
    }

    toggleLogicSymbols() {
        this.setState({logicSymbols: !this.state.logicSymbols})
    }

    toggleMinimize() {
        if (this.state.minimize) {
            this.setState({minimize: false})
            this.setState({minimizeSubFormulas: false})
        } else {
            this.setState({minimize: true})
            this.setState({minimizeSubFormulas: true})
        }
    }

    toggleMinimizeSubFormulas() {
        this.setState({minimizeSubFormulas: !this.state.minimizeSubFormulas})
    }

    toggleShowTruthTable() {
        this.setState({showTruthTable: !this.state.showTruthTable})
    }

    toggleParenthesize() {
        this.setState({parenthesize: !this.state.parenthesize})
    }

    render() {
        return (
            <Container>

                <Header/>

                <Row>

                    <Card>
                        <CardHeader>Enter two Boolean formulas to compute their most-general unifier (mgu)</CardHeader>
                        <CardBody>
                            <Form>
                                <Row form>
                                    <Col md={5}>
                                        {this.renderLHSInput()}
                                    </Col>
                                    <Col md={2}>
                                        <p className="qeq">=</p>
                                    </Col>
                                    <Col md={5}>
                                        {this.renderRHSInput()}
                                    </Col>
                                </Row>

                                <Row form>
                                    <CustomInput id="reformat" type="checkbox"
                                                 label="Reformat as you type"
                                                 checked={this.state.formatInput}
                                                 onChange={this.toggleFormatInput.bind(this)}
                                                 inline/>

                                    <CustomInput id="logicsymbols" type="checkbox"
                                                 label="Use logic symbols"
                                                 checked={this.state.logicSymbols}
                                                 onChange={this.toggleLogicSymbols.bind(this)}
                                                 inline
                                    />

                                    <CustomInput id="minimize" type="checkbox"
                                                 label="Minimize formulas"
                                                 checked={this.state.minimize}
                                                 onChange={this.toggleMinimize.bind(this)}
                                                 inline
                                    />

                                    <CustomInput id="minimizeSubFormulas" type="checkbox"
                                                 label="Recursively minimize"
                                                 checked={this.state.minimizeSubFormulas}
                                                 disabled={!this.state.minimize}
                                                 onChange={this.toggleMinimizeSubFormulas.bind(this)}
                                                 inline
                                    />

                                    <CustomInput id="showTruthTable" type="checkbox"
                                                 label="Show truth table"
                                                 checked={this.state.showTruthTable}
                                                 onChange={this.toggleShowTruthTable.bind(this)}
                                                 inline
                                    />

                                    <CustomInput id="parenthesize" type="checkbox"
                                                 label="Fully parenthesize"
                                                 checked={this.state.parenthesize}
                                                 onChange={this.toggleParenthesize.bind(this)}
                                                 inline
                                    />
                                </Row>
                            </Form>
                        </CardBody>
                    </Card>

                </Row>

                {this.renderResult()}

            </Container>);
    }

    renderLHSInput() {
        if (this.state.lhsInput === "" || this.state.lhsParsed.valid) {
            return <FormGroup>
                <Input id="lhs" type="text" bsSize="lg" autoFocus autoComplete="off"
                       value={this.state.lhsInput}
                       onChange={this.notifyLHS.bind(this)}
                />
            </FormGroup>
        } else {
            return <FormGroup>
                <Input id="lhs" type="text" bsSize="lg" autoComplete="off"
                       value={this.state.lhsInput}
                       onChange={this.notifyLHS.bind(this)}
                       invalid={true}/>
                <FormFeedback invalid={"yes"}>{this.state.lhsParsed.error}</FormFeedback>
            </FormGroup>
        }
    }

    renderRHSInput() {
        if (this.state.rhsInput === "" || this.state.rhsParsed.valid) {
            return <FormGroup>
                <Input id="lhs" type="text" bsSize="lg" autoComplete="off"
                       value={this.state.rhsInput}
                       onChange={this.notifyRHS.bind(this)}/>
            </FormGroup>
        } else {
            return <FormGroup>
                <Input id="lhs" type="text" bsSize="lg" autoComplete="off"
                       value={this.state.rhsInput}
                       onChange={this.notifyRHS.bind(this)}
                       invalid/>
                <FormFeedback invalid={"yes"}>{this.state.rhsParsed.error}</FormFeedback>
            </FormGroup>
        }
    }

    renderResult() {
        let result = this.state.result;
        if (result !== undefined) {
            if (result.status === "success") {
                let fvs = this.state.result.freeVars
                let tt = this.state.result.truthTable
                return (<Row>
                    <Summary truthTable={result.truthTable}/>
                    <Substitution subst={Object.entries(result.subst)}
                                  logicSymbols={this.state.logicSymbols}
                                  minimize={this.state.minimize}
                                  minimizeSubFormulas={this.state.minimizeSubFormulas}
                                  parenthesize={this.state.parenthesize}/>

                    {this.state.showTruthTable ? <TruthTable freeVars={fvs} truthTable={tt}/> : []}
                </Row>)
            } else if (result.status === "failure") {
                return <UnificationFailure reason={result.reason}/>
            } else {
                throw new Error(`Illegal value of status: ${result.status}`)
            }
        }
    }

}

export default App;
