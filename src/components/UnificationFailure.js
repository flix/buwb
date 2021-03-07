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
import {Alert, Row} from "reactstrap";

class UnificationFailure extends Component {

    render() {
        let reason = this.props.reason

        return (
            <Row className="col-12">
                <Alert color="danger" className="mt-3 w-100">
                    <h4 className="alert-heading">Unification Failure</h4>
                    <hr/>
                    <p className="mb-0">
                        {reason}
                    </p>
                </Alert>
            </Row>
        )
    }

}

export default UnificationFailure
