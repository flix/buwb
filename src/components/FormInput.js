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
import {
    Card,
    CardBody,
    CardHeader,
    Col,
    CustomInput,
    Form,
    FormFeedback,
    FormGroup,
    Input,
    Label,
    Row
} from "reactstrap";
import {parse} from "../Parser";
import {minBool, showBool} from "../Bools";
import {METHOD} from "../BoolUnification.js";

class FormInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lhsInput: "",
            rhsInput: "",
            lhsParsed: {valid: undefined},
            rhsParsed: {valid: undefined}
        }
    }

    notifyLHS(e) {
        let lhsInput = this.format(e.target.value);
        this.setState({lhsInput: lhsInput})
        try {
            let parseResult = parse(lhsInput)
            this.setState({lhsParsed: {valid: true, value: parseResult}})
            if (this.state.rhsParsed.valid) {
                this.props.notifySolve(parseResult, this.state.rhsParsed.value)
            }
        } catch (e) {
            console.log(e)
            this.props.notifyClear()
            this.setState({lhsParsed: {valid: false, error: e.toString()}})
        }
    }

    notifyRHS(e) {
        let rhsInput = this.format(e.target.value);
        this.setState({rhsInput: rhsInput})
        try {
            let parseResult = parse(rhsInput)
            this.setState({rhsParsed: {valid: true, value: parseResult}})
            if (this.state.lhsParsed.valid) {
                this.props.notifySolve(this.state.lhsParsed.value, parseResult)
            }
        } catch (e) {
            console.log(e)
            this.props.notifyClear()
            this.setState({rhsParsed: {valid: false, error: e.toString()}})
        }
    }

    notifyChangeMethod(method) {
        this.props.changeMethod(method, () => {
            if (this.state.lhsParsed.valid && this.state.rhsParsed.valid) {
                this.props.notifySolve(this.state.lhsParsed.value, this.state.rhsParsed.value)
            }
        })
    }

    simplifyFormulas() {
        function simplify(f) {
            return showBool(minBool(f, true))
        }

        if (this.state.lhsParsed.valid && this.state.rhsParsed.valid) {
            let lhs = simplify(this.state.lhsParsed.value)
            let rhs = simplify(this.state.rhsParsed.value)
            this.setState({lhsInput: lhs, rhsInput: rhs})
        }
    }

    render() {
        let reformat = this.props.reformat
        let logicSymbols = this.props.logicSymbols
        let minimize = this.props.minimize
        let minimizeSubFormulas = this.props.minimizeSubFormulas
        let minimizeQuineMcCluskey = this.props.minimizeQuineMcCluskey
        let truthTable = this.props.truthTable
        let parenthesize = this.props.parenthesize
        let method = this.props.unifyMethod

        let toggleReformat = this.props.toggleReformat
        let toggleLogicSymbols = this.props.toggleLogicSymbols
        let toggleMinimize = this.props.toggleMinimize
        let toggleMinimizeSubFormulas = this.props.toggleMinimizeSubFormulas
        let toggleMinimizeQuineMcCluskey = this.props.toggleMinimizeQuineMcCluskey
        let toggleTruthTable = this.props.toggleTruthTable
        let toggleParenthesize = this.props.toggleParenthesize

        return (
            <Row className="col-12">
                <Card className="w-100">
                    <CardHeader>Enter two Boolean formulas to compute their most-general unifier (mgu)</CardHeader>
                    <CardBody>
                        <Form>
                            <Row form>
                                <Col md={5}>
                                    {this.renderLHSInput()}
                                </Col>
                                <Col md={2}>
                                    <p className="qeq">
                                        <span onClick={this.simplifyFormulas.bind(this)}
                                              style={{"cursor": "pointer"}}>=</span>
                                    </p>
                                </Col>
                                <Col md={5}>
                                    {this.renderRHSInput()}
                                </Col>
                            </Row>

                            <Row form>
                                <CustomInput id="reformat" type="checkbox"
                                             label="Reformat as you type"
                                             checked={reformat}
                                             onChange={toggleReformat}
                                             inline/>

                                <CustomInput id="logicSymbols" type="checkbox"
                                             label="Use logic symbols"
                                             checked={logicSymbols}
                                             onChange={toggleLogicSymbols}
                                             inline
                                />

                                <CustomInput id="minimize" type="checkbox"
                                             label="Minimize formulas"
                                             checked={minimize}
                                             onChange={toggleMinimize}
                                             inline
                                />

                                <CustomInput id="minimizeSubFormulas" type="checkbox"
                                             label="Recursively minimize"
                                             checked={minimizeSubFormulas}
                                             disabled={!minimize}
                                             onChange={toggleMinimizeSubFormulas}
                                             inline
                                />

                                <CustomInput id="minimizeQuineMcCluskey" type="checkbox"
                                             label="Quine-McCluskey minimize"
                                             checked={minimizeQuineMcCluskey}
                                             disabled={!minimize}
                                             onChange={toggleMinimizeQuineMcCluskey}
                                             inline
                                />

                                <CustomInput id="truthTable" type="checkbox"
                                             label="Show truth table"
                                             checked={truthTable}
                                             onChange={toggleTruthTable}
                                             inline
                                />

                                <CustomInput id="parenthesize" type="checkbox"
                                             label="Fully parenthesize"
                                             checked={parenthesize}
                                             onChange={toggleParenthesize}
                                             inline
                                />
                            </Row>

                            <hr/>

                            <Row form className="mb-0 pb-0 float-right">
                                <FormGroup check className="mr-4">
                                    <Label check>
                                        <Input type="radio" name="radio" defaultChecked
                                               onClick={() => this.notifyChangeMethod(METHOD.SVE)}/>
                                        Successive Variable Elimination (SVE)
                                    </Label>
                                </FormGroup>

                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="radio"
                                               onClick={() => this.notifyChangeMethod(METHOD.Lowenheim)}/>
                                        Löwenheim's Algorithm
                                    </Label>
                                </FormGroup>
                            </Row>
                        </Form>
                    </CardBody>
                </Card>
            </Row>
        )
    }

    renderLHSInput() {
        if (this.state.lhsInput === "" || this.state.lhsParsed.valid) {
            return <FormGroup>
                <Input id="lhs" type="text" bsSize="lg" autoFocus autoComplete="off" spellCheck="off"
                       value={this.state.lhsInput}
                       onChange={this.notifyLHS.bind(this)}
                />
            </FormGroup>
        } else {
            return <FormGroup>
                <Input id="lhs" type="text" bsSize="lg" autoComplete="off" spellCheck="off"
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
                <Input id="rhs" type="text" bsSize="lg" autoComplete="off" spellCheck="off"
                       value={this.state.rhsInput}
                       onChange={this.notifyRHS.bind(this)}/>
            </FormGroup>
        } else {
            return <FormGroup>
                <Input id="rhs" type="text" bsSize="lg" autoComplete="off" spellCheck="off"
                       value={this.state.rhsInput}
                       onChange={this.notifyRHS.bind(this)}
                       invalid/>
                <FormFeedback invalid={"yes"}>{this.state.rhsParsed.error}</FormFeedback>
            </FormGroup>
        }
    }

    format(x) {
        if (!this.props.reformat) {
            return x
        }

        return x
            .replaceAll("not", "¬")
            .replaceAll("neg", "¬")
            .replaceAll("and", "∧")
            .replaceAll("or", "∨")
    }

}

export default FormInput
