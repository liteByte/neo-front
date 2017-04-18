import React, { Component } from 'react';

const containerStyle = {
  width: '45%',
  padding: 10,
  boxSizing: 'border-box',
  float: 'left',
  textAlign: 'center',
};

const rowStyle = {
  width: '100%',
  height: 60,
  float: 'left',
};

const imgStyle = {
  width: '65%',
  height: '100%',
  float: 'left',
};

const numberContainerStyle = {
  width: '35%',
  height: '100%',
  float: 'left',
  fontWeight: 'bold',
  fontFamily: 'Dosis, sans-serif',
  fontSize: '1.5em',
};

const numberStyle = {
  top: '50%',
  position: 'relative',
  transform: 'translateY(-50%)',
};

const descStyle = {
  marginTop: 10,
  float: 'left',
  fontSize: '.75em',
};

export default class Comparison extends Component {
  render() {
    return (
      <div style={containerStyle}>
        <div style={rowStyle}>
          <div style={imgStyle}><img src="assets/elefante.svg" alt="Elephant" height="100%"/></div>
          <div style={numberContainerStyle}><div style={numberStyle}>x100</div></div>
        </div>
        <div style={descStyle}>times the size of an elephant</div>
      </div>
    );
  }
}

Comparison.propTypes = {
  data: React.PropTypes.number.isRequired,
};
