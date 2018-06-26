import React, { Component } from 'react';

import Header from './containers/Header/Header';
import Main from './containers/Main/Main';

import 'semantic-ui-css/semantic.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
