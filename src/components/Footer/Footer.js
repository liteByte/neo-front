import React, {Component} from "react";

const footerStyle = {
  width: '100%',
  height: 50,
  padding: 17,
  boxSizing: 'border-box',
  position: 'fixed',
  bottom: 0,
  zIndex: '1400',
  background: '#0a0a0a',
  color: '#fff',
  fontSize: '.80em',
  fontWeight: 100,
  textAlign: 'center',
  willChange: 'transform',
};

const aStyle = {
  textDecoration: 'none',
  color: 'inherit',
};

export default class Footer extends Component {
  render() {
    return (
      <footer style={footerStyle}>
        developed by liteByte and powered by <a href="https://api.nasa.gov/api.html" style={aStyle}>NASA's API</a>
      </footer>
    );
  }
}
