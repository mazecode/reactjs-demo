import React from "react";
import {connect} from "react-redux";

import {allBook} from "../actions/bookActions";
import {showPerson} from "../actions/personActions";

import Books from "./Books";
import Persons from "./Person";

function mapStateToProps(state) {
    return {
        books: state.books,
        person: state.person.person
    }
}

class App extends React.Component {
    constructor() {
        super();
    }

    componentWillMount() {
        this.props.allBook();
        this.props.showPerson();
    }

    headerBlock() {
        return (
            <div className="row justify-content-md-center align-items-start">
                <h1>Welcome!</h1>
            </div>
        );
    };

    render() {
        // console.log("MAIN", this.props, this.props.books.hasOwnProperty('error'))
        return (
            <div>
                {this.headerBlock()}
                <Persons persons={this.props.person}/>
                <Books books={this.props.books}/>
            </div>
        )
    }
}

export default connect(mapStateToProps, {allBook, showPerson})(App);