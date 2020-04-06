import React, { Component } from "react";
import { HashRouter, Switch, Link, Route } from "react-router-dom";
import "./App.css";

import ReportViewer from "./components/ReportViewer";
import ReportDesigner from "./components/ReportDesigner";

class App extends Component {
  renderLink(child) {
    return <div style={{ padding: '5px', margin: '5px', backgroundColor: 'rgba(0,0,0,0.1)'}}>
      {child}
    </div>
  }

  render() {
    return (
      <HashRouter>
        <div className="App">
          <nav style={{ display: 'flex'}}>
          {this.renderLink(<span>Navigation:</span>)}
          {this.renderLink(<Link to="/">Report viewer</Link>)}
          {this.renderLink(<Link to="/designer">Report Designer (Loading is very slow)</Link>)}
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
