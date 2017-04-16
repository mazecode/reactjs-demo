import React from "react";
import Footer from "./layout/Footer";
import Nav from "./layout/Nav";

export default class App extends React.Component {
    constructor() {
        super();
    }

    headerBlock() {
        return (
            <div className="row justify-content-md-center align-items-start">
                <h1>Welcome!</h1>
            </div>
        );
    };

    render() {
        const {location} = this.props;
        const containerStyle = {
            // marginTop: "60px"
        };
        return (
            <div>
                <Nav location={location}/>

                <div className="container-fluid" style={containerStyle}>
                    <div className="row">
                        <div className="col-12">
                            {this.headerBlock()}

                            {this.props.children}
                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>
        )
    }
}