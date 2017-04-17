import React, { Component } from 'react';

const containerStyle = {
  width: '40%',
  padding: 10,
  boxSizing: 'border-box',
  float: 'left',
  textAlign: 'center',
};

const imgStyle = {
  width: '65%',
  float: 'left',
};

const numberStyle = {
  width: '35%',
  marginTop: 13,
  float: 'left',
  fontWeight: 'bold',
  fontFamily: 'Dosis, sans-serif',
  textAlign: 'right',
};

const descStyle = {
  float: 'left',
  fontSize: '.75em',
};

export default class Comparison extends Component {
  render() {
    return (
      <div style={containerStyle}>
        <div style={imgStyle}><img src="assets/elefante.svg" alt="Elephant" width="100%"/></div>
        <div style={numberStyle}> x100 </div>
        <div style={descStyle}>times the size of an elephant</div>
      </div>
    );
  }
}

Comparison.propTypes = {
  data: React.PropTypes.number.isRequired,
};
