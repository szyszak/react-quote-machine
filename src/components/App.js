import React, { Component } from 'react';
import './App.scss';
import QuoteCard from './QuoteCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <QuoteCard />
      </div>
    );
  }
}

export default App;
