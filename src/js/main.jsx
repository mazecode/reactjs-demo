/**
 * General Imports
 */
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {hashHistory, IndexRoute, Route, Router} from "react-router";
/**
 * Store
 */
import store from "./store";
/**
 * Components
 */
import App from "./components/App";
/**
 * Pages
 */
import Home from "./pages/Home";
import Library from "./pages/Library";

const app = document.getElementById('app');

// ReactDOM.render(<Provider store={store}><App /></Provider>, app);
ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
                <Route path="library" name="library" component={Library}/>
            </Route>
        </Router>
    </Provider>,
    app);