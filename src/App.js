import React, { Component } from "react";
import { HashRouter, Switch, Link, Route } from "react-router-dom";
import "./App.css";

import ReportViewer from "./components/ReportViewer";
import ReportDesigner from "./components/ReportDesigner";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <nav>
            <ul>
              <li>
                <Link to="/">Report viewer</Link>
              </li>
              <li>
                <Link to="/designer">Report Designer</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/designer" exact component={ReportDesigner} />
            <Route path="/" exact component={ReportViewer}/>
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
