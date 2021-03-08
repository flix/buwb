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
import {isAllFalse, isAllTrue} from "../Bools";
import {Alert, Row} from "reactstrap";

class Summary extends Component {

    render() {
        let tt = this.props.truthTable
        if (isAllTrue(tt)) {
            return (
                <Row className="col-12">
                    <Alert color="success" fade={false} className="mt-3 w-100">
                        <b>Note:</b> The unifies reduce to TRUE, i.e. applying the mgu (substitution) to both formulas
                        reduce them to TRUE.
                    </Alert>
                </Row>
            )
        } else if (isAllFalse(tt)) {
            return (
                <Row className="col-12">
                    <Alert color="success" fade={false} className="mt-3 w-100">
                        <b>Note:</b> The unifies reduce to FALSE, i.e. applying the mgu (substitution) to both formulas
                        reduce them to FALSE.
                    </Alert>
                </Row>)
        } else {
            return []
        }
    }

}

export default Summary
