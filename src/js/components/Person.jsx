import React from "react";
import {connect} from "react-redux";

import {showPerson} from "../actions/personActions";

function mapStateToProps(state) {
    return {
        person: state.person.person
    }
}

class Person extends React.Component {
    constructor() {
        super();
    }

    componentWillMount() {
        this.props.showPerson();
    }

    renderPersonList() {
        if (this.props.person.hasOwnProperty('results')) {
            return this.props.person.results.map((person) => {
                return (
                    <div className="card text-center" key={person.id.value}>
                        <img className="card-img-top" src={person.picture.large} alt="Card image cap"/>
                        <article className="card-block">
                            <p className="card-text">{person.name.first} {person.name.last}
                                <br />
                                <small>{person.email}</small>
                            </p>
                        </article>
                    </div>
                )
            });
        }
    }

    render() {
        return (
            <div>
                <div className="row align-items-center">
                    <div className="col">
                        {this.renderPersonList()}
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, {showPerson})(Person);