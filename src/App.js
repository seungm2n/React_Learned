import React, { Component } from 'react';
import './App.css';

class Subject extends Component{
  render() {
    return (
      <header>
        <h1>WEB</h1>
        World Wide Web !
      </header>
    );
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject></Subject>
      </div>
    );
  }
}
class TOC extends Component {
  render() {
    return (
      <nav></nav>
    );
  }
}


export default App;
