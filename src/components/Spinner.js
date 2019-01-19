import React, { Component } from 'react';
import './Spinner.scss';

class Spinner extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return(
      <>
        <div className="spinner"></div>
        <p className="spinner-text">SOMETHING IS LOADING...</p>
      </>
    );
  }
}

export default Spinner;