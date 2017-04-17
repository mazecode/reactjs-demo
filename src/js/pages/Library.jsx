import React from "react";

import Books from "../components/Books";

export default class Library extends React.Component {
    constructor(props) {
        super(props);
        console.log("LIBRARY", props, this.props)
        // this.props.changeTitle("Library");
    }

    render() {
        return (
            <Books />
        )
    }
}
