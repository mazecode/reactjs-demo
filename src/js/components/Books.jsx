import React from "react";
import {connect} from "react-redux";

import {allBook} from "../actions/bookActions";

function mapStateToProps(state) {
    return {
        books: state.books
    }
}

class Books extends React.Component {
    constructor() {
        super();
    }

    componentWillMount() {
        this.props.allBook();
    }

    renderBookItem() {
        if (this.props.books !== 'undefined' || this.props.books.books !== null) {
            console.log(this.props)
            return this.props.books.books.map((book) => {
                return (
                    <li key={book.id}>{book.title} - <strong>{book.author}</strong></li>
                )
            })
        }
    }

    renderBookList() {
        if (this.props.books.error !== null && this.props.books.error.hasOwnProperty('message')) {
            return (
                <div className="alert alert-danger" role="alert">
                    <strong>Oh snap!</strong><a href="#" className="alert-link">{this.props.books.error.message}</a>
                </div>
            );
        }

        if (this.props.books.books.length <= 0) {
            return (
                <div className="alert alert-warning" role="alert">
                    <strong>Oh snap!</strong> <a href="#" className="alert-link">Empty</a>
                </div>
            )
        }

        return (
            <ul>{this.renderBookItem()}</ul>
        )
    }

    render() {
        return (
            <div className="row">
                <div className="col">
                    {this.renderBookList()}
                </div>
            </div>
        )
    }
}


export default connect(mapStateToProps, {allBook})(Books);