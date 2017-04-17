import React from "react";

import Person from "../components/Person";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        console.log("HOME", props, this.props)
        // this.props.changeTitle("Home");
    }

    render() {
        return (
            <Person />
        );
    }
}
