import React from "react";
import Footer from "./layout/Footer";
import Nav from "./layout/Nav";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Welcome",
        };
        this.changeTitle = this.changeTitle.bind(this);
        this.headerBlock = this.headerBlock.bind(this);
    }

    changeTitle(title) {
        console.log("CHANGETITLE", title);
        this.setState({title});
    }

    headerBlock() {
        console.log("HEADBLOCK", this.state.title)
        return (
            <div className="row justify-content-md-center align-items-start">
                <h1>{this.state.title}</h1>
            </div>
        );
    };

    render() {
        const {location} = this.props;
        const containerStyle = {
            // marginTop: "60px"
        };
        console.log("APP RENDER", this)
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