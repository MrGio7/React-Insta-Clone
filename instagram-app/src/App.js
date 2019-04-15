import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import DummyDatta from './dummy-data';

class App extends Component {
  constructor(){
    super();

    this.state = {
      posts: DummyDatta
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          
        </header>
      </div>
    );
  }
}

export default App;
