import React, {Component} from 'react';
import './App.css';
import {isTrue, isFalse, isVar, isNot, isAnd, isOr, minimize, precedence} from "./Bools";
import {parse} from "./Parser";
import {unify} from "./Unification";

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

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lhsInput: "",
            rhsInput: "",
            lhsParsed: {valid: undefined},
            rhsParsed: {valid: undefined},
            result: "Pending",
            formatInput: true,
            logicSymbols: true,
            minimize: true,
            minimizeSubFormulas: true,
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
            this.setState({result: undefined, rhsParsed: {valid: false, error: e.toString()}})
        }
    }

    solve(x, y) {
        let result = unify(x, y)
        this.setState({result: result})
    }

    format(x) {
        if (!this.state.formatInput) {
            return x
        }

        return x
            .replaceAll("not", "¬")
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
        this.setState({minimize: !this.state.minimize})
    }

    toggleMinimizeSubFormulas() {
        this.setState({minimizeSubFormulas: !this.state.minimizeSubFormulas})
    }

    toggleParenthesize() {
        this.setState({parenthesize: !this.state.parenthesize})
    }

    render() {
        return (
            <Container>

                <h1>Boolean Unification Workbench</h1>

                <blockquote>
                    The earliest work on Boolean unification and the successive variable elimination algorithm
                    goes back to George Boole himself [Boole 1847]. Later work includes that of Rudeanu [1974]
                    and Buttnerand Simonis [1987]. Martin and Nipkow [1989] provide an accessible introduction to
                    Boolean unification, while Boudet et al. [1989] study unification in combinations of theories,
                    including Boolean rings.
                </blockquote>

                <Card>
                    <CardHeader>Enter two Boolean formulae to compute their most-general unifier (mgu)</CardHeader>
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

                            <Row form className="float-right">
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
                                             label="Recursive Minimization"
                                             checked={this.state.minimizeSubFormulas}
                                             onChange={this.toggleMinimizeSubFormulas.bind(this)}
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

                {this.renderResult()}

            </Container>);
    }

    renderLHSInput() {
        if (this.state.lhsInput === "" || this.state.lhsParsed.valid) {
            return <FormGroup>
                <Input id="lhs" type="text" bsSize="lg" autoComplete="off"
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
        if (result && result.status === "success") {
            return (<Card className="mt-3">
                <CardHeader>Substitution</CardHeader>
                <CardBody>
                    {this.renderSubstitution(Object.entries(result.subst))}
                </CardBody>
            </Card>)
        }
        if (result && result.status === "failure") {
            return <Alert color="danger" className="mt-3">
                <h4 className="alert-heading">Unification Failure</h4>
                <p>
                    The two terms cannot be unified.
                </p>
                <hr/>
                <p className="mb-0">
                    <code>
                        {result.reason}
                    </code>
                </p>
            </Alert>
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
                    <td>{this.renderFormula(formula)}</td>
                </tr>
            ))}
            </tbody>
        </Table>
    }

    renderFormula(x) {
        if (this.state.minimize) {
            return this.renderTerm(minimize(x, this.state.minimizeSubFormulas))
        } else {
            return this.renderTerm(x)
        }
    }

    renderTerm(t) {
        let lparen = <span className="lparen">(</span>;
        let rparen = <span className="rparen">)</span>;
        let neg = (this.state.logicSymbols) ? "¬" : "not "
        let conj = (this.state.logicSymbols) ? "∧" : "and"
        let disj = (this.state.logicSymbols) ? "∨" : "or"
        let parenthesize = this.state.parenthesize

        function visit(x) {
            if (isTrue(x)) {
                return "true"
            } else if (isFalse(x)) {
                return "false"
            } else if (isVar(x)) {
                return x.name;
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
                throw Error(`Unexpected argument: ${x}.`)
            }
        }

        return visit(t)
    }
}

export default App;
