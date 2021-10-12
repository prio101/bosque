// We need to import the CSS so that webpack will load it.
// The MiniCssExtractPlugin is used to separate it out into
// its own CSS file.
const _css = require("../css/app.scss");

// webpack automatically bundles all modules in your
// entry points. Those entry points can be configured
// in "webpack.config.js".
//
// Import deps with the dep name or local files with a relative path, for example:
//
//     import {Socket} from "phoenix"
//     import socket from "./socket"
//
import "phoenix_html"
import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route, Redirect } from 'react-router-dom';
import Sidebar from 'components/Sidebar';
// import Dashboard from 'pages/Dashboard';
// import Settings from 'pages/Settings';
// import Tables from 'pages/Tables';
// import Maps from 'pages/Maps';
// import Footer from 'components/Footer';

// Tailwind CSS Style Sheet
import 'assets/css/app.scss';

function App() {
    return (
        <>
            <Sidebar />
            <div className="md:ml-64">
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/settings" component={Settings} />
                    <Route exact path="/tables" component={Tables} />
                    <Route exact path="/maps" component={Maps} />
                    <Redirect from="*" to="/" />
                </Switch>
                <Footer />
            </div>
        </>
    );
}

export default App;