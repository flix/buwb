import React, {Component} from 'react';
import './App.css';
import {isTrue, truthTable, freeVars, isAllTrue, isAllFalse} from "./Bools";
import {parse} from "./Parser";
import {minimizeTerm, unifyTerm} from "./TermUnification";

import {
    Alert,
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
    Row,
    Table
} from "reactstrap";
import {applySubst} from "./Substitution";
import Header from "./components/Header";
import Term from "./components/Term";

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
                return (<div>
                    {this.renderSummary()}
                    <Card className="mt-3">
                        <CardHeader>Substitution (Most General Unifier)</CardHeader>
                        <CardBody>
                            {this.renderSubstitution(Object.entries(result.subst))}
                        </CardBody>
                    </Card>
                    {this.renderTruthTable()}
                </div>)
            } else if (result.status === "failure") {
                return <Alert color="danger" className="mt-3">
                    <h4 className="alert-heading">Unification Failure</h4>
                    <hr/>
                    <p className="mb-0">
                        {result.reason}
                    </p>
                </Alert>
            } else {
                throw new Error(`Illegal value of status: ${result.status}`)
            }
        }
    }

    renderSubstitution(subst) {
        return <Table>
            <thead>
            <tr>
                <th>Variable</th>
                <th>Formula</th>
            </tr>
            </thead>
            <tbody>
            {subst.map(([varSym, formula]) => (
                <tr key={varSym}>
                    <td>{varSym}</td>
                    <td>{this.showTerm(formula)}</td>
                </tr>
            ))}
            </tbody>
        </Table>
    }

    renderSummary() {
        let tt = this.state.result.truthTable
        console.log(tt)
        if (isAllTrue(tt)) {
            return <Alert color="success" fade={false} className="mt-3">
                <b>Note:</b> The unifiers reduce to TRUE, i.e. applying the mgu (substitution) to both formulas reduce
                them to TRUE.
            </Alert>
        } else if (isAllFalse(tt)) {
            return <Alert color="success" fade={false} className="mt-3">
                <b>Note:</b> The unifiers reduce to FALSE, i.e. applying the mgu (substitution) to both formulas reduce
                them to FALSE.
            </Alert>
        } else {
            return undefined
        }
    }

    renderTruthTable() {
        if (!this.state.showTruthTable) {
            return undefined
        }

        let fvs = this.state.result.freeVars
        let tt = this.state.result.truthTable

        return (
            <Card className="mt-3">
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
                                {row.map(t => isTrue(t) ? <td>T</td> : <td>F</td>)}
                            </tr>
                        })}
                        </tbody>
                    </Table>
                </CardBody>
            </Card>)
    }

    showTerm(term) {
        if (this.state.minimize) {
            let minTerm = minimizeTerm(term, this.state.minimizeSubFormulas);
            return <Term term={minTerm} logicSymbols={this.state.logicSymbols} parenthesize={this.state.parenthesize}/>
        } else {
            return <Term term={term} logicSymbols={this.state.logicSymbols} parenthesize={this.state.parenthesize}/>
        }
    }


}

export default App;
