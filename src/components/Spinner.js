import React, { Component } from 'react';
import './Spinner.scss';

class Spinner extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return(
      <div className="spinner"></div>
    );
  }
}

export default Spinner;