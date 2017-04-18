import React, { Component } from 'react';

export default class Comparison extends Component {
  render() {
    return (
      <div className="comparison-container">
        <div className="row">
          <div className="image"><img src="assets/elefante.svg" alt="Elephant" height="100%"/></div>
          <div className="number-container"><div className="number">x100</div></div>
        </div>
        <div className="description">times the size of an elephant</div>
      </div>
    );
  }
}

Comparison.propTypes = {
  data: React.PropTypes.number.isRequired,
};
