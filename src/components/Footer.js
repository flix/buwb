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
import {Row} from "reactstrap";

class Footer extends Component {

    render() {
        return (
            <Row className="col-12 mt-3">
                <p className="small text-secondary">
                    <hr style={{"marginBottom": "0.2rem"}}/>
                    If you find this website useful, please consider citing it in your own work as: <br/>
                    <i>Magnus Madsen and Jaco van de Pol.</i> Boolean Unification Workbench. Retrieved from
                    https://flix.dev/buwb/
                </p>
            </Row>
        )
    }

}

export default Footer
