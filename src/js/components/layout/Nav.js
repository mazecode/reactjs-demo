import React from "react";
import {IndexLink, Link} from "react-router";

export default class Nav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsed: true,
        };
    }

    toggleCollapse() {
        const collapsed = !this.state.collapsed;
    }

    render() {
        const {location} = this.props;
        const {collapsed} = this.state;
        const homeClass = location.pathname === "/" ? "active" : "";
        const libraryClass = location.pathname.match(/^\/library/) ? "active" : "";
        const navClass = collapsed ? "collapse" : "";

        console.log(location.pathname);

        return (
            <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="#">Navbar</a>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className={"nav-item " + homeClass}>
                            <IndexLink to="/" className="nav-link" onClick={this.toggleCollapse.bind(this)}>Home <span
                                className="sr-only">(current)</span></IndexLink>
                        </li>
                        <li className={"nav-item " + libraryClass}>
                            <Link to="library" className="nav-link" onClick={this.toggleCollapse.bind(this)}>Library</Link>
                        </li>
                        <li className={"nav-item"}>
                            <a className="nav-link disabled" href="#">Disabled</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            /**
             <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
             <div className="container">
             <div className="navbar-header">
             <button type="button" className="navbar-toggle" onClick={this.toggleCollapse.bind(this)}>
             <span className="sr-only">Toggle navigation</span>
             <span className="icon-bar"></span>
             <span className="icon-bar"></span>
             <span className="icon-bar"></span>
             </button>
             </div>
             <div className={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
             <ul className="nav navbar-nav">
             <li className={featuredClass}>
             <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Featured</IndexLink>
             </li>
             <li className={archivesClass}>
             <Link to="archives" onClick={this.toggleCollapse.bind(this)}>Archives</Link>
             </li>
             <li className={settingsClass}>
             <Link to="settings" onClick={this.toggleCollapse.bind(this)}>Settings</Link>
             </li>
             </ul>
             </div>
             </div>
             </nav>
             **/
        )
    }
}
