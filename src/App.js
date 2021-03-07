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
import {Container} from "reactstrap";

import Header from "./components/Header";
import Summary from "./components/Summary";
import Substitution from "./components/Substitution";
import TruthTable from "./components/TruthTable";
import UnificationFailure from "./components/UnificationFailure";
import FormInput from "./components/FormInput";

import {truthTable, freeVars} from "./Bools";
import {unifyTerm} from "./TermUnification";
import {applySubst} from "./Substitution";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            result: undefined,
            reformat: true,
            logicSymbols: true,
            minimize: true,
            minimizeSubFormulas: true,
            truthTable: false,
            parenthesize: false,
        }
    }

    notifySolve(x, y) {
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

    notifyClear() {
        this.setState({result: undefined})
    }

    toggleReformat() {
        this.setState({reformat: !this.state.reformat})
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

    toggleTruthTable() {
        this.setState({truthTable: !this.state.truthTable})
    }

    toggleParenthesize() {
        this.setState({parenthesize: !this.state.parenthesize})
    }

    render() {
        return (
            <Container>
                <Header/>

                <FormInput
                    reformat={this.state.reformat}
                    toggleReformat={this.toggleReformat.bind(this)}

                    logicSymbols={this.state.logicSymbols}
                    toggleLogicSymbols={this.toggleLogicSymbols.bind(this)}

                    minimize={this.state.minimize}
                    toggleMinimize={this.toggleMinimize.bind(this)}

                    minimizeSubFormulas={this.state.minimizeSubFormulas}
                    toggleMinimizeSubFormulas={this.toggleMinimizeSubFormulas.bind(this)}

                    showTruthTable={this.state.truthTable}
                    toggleTruthTable={this.toggleTruthTable.bind(this)}

                    parenthesize={this.state.parenthesize}
                    toggleParenthesize={this.toggleParenthesize.bind(this)}

                    notifySolve={this.notifySolve.bind(this)}
                    notifyClear={this.notifyClear.bind(this)}
                />

                {this.renderResult()}
            </Container>);
    }

    renderResult() {
        let result = this.state.result;
        if (result !== undefined) {
            if (result.status === "success") {
                let fvs = this.state.result.freeVars
                let tt = this.state.result.truthTable
                return (<div>
                    <Summary truthTable={result.truthTable}/>
                    <Substitution subst={Object.entries(result.subst)}
                                  logicSymbols={this.state.logicSymbols}
                                  minimize={this.state.minimize}
                                  minimizeSubFormulas={this.state.minimizeSubFormulas}
                                  parenthesize={this.state.parenthesize}/>

                    {this.state.showTruthTable ? <TruthTable freeVars={fvs} truthTable={tt}/> : []}
                </div>)
            } else if (result.status === "failure") {
                return <UnificationFailure reason={result.reason}/>
            } else {
                throw new Error(`Illegal value of status: ${result.status}`)
            }
        }
    }

}

export default App;
