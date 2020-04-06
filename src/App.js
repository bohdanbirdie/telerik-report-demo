import React, { Component } from 'react';
import './App.css';
   
import ReportViewer from './components/ReportViewer';

class App extends Component {
  render() {
    return (
      <div className="App">
        Welcome to React App
        <ReportViewer />
      </div>
    );
  }
}

export default App;
