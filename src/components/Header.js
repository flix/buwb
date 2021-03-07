import React, {Component} from "react";
import {Row} from "reactstrap";

class Header extends Component {

    render() {
        return (
            <Row>
                <h1>Boolean Unification Workbench</h1>

                <blockquote>
                    The earliest work on Boolean unification and the successive variable elimination algorithm
                    goes back to George Boole himself [Boole 1847]. Later work includes that of Rudeanu [1974]
                    and Buttnerand Simonis [1987]. Martin and Nipkow [1989] provide an accessible introduction to
                    Boolean unification, while Boudet et al. [1989] study unification in combinations of theories,
                    including Boolean rings.
                </blockquote>

                <blockquote>
                    <b>The Problem: </b> Given two Boolean formulas x and y, the Boolean Unification Problem x ?= y is
                    to compute a unifier (solution) i.e. a substitution S such that S(x) ≡ S(y) or to report that no
                    such substitution
                    exists.
                </blockquote>
            </Row>
        )
    }

}

export default Header
