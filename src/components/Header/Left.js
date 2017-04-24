import React, {Component} from "react";
import MediaQuery from "react-responsive";

const divLeftStyle = {
  height: '100%',
  flex: 1,
};

const imgContainerStyle = {
  height: '100%',
  display: 'block',
  textDecoration: 'none',
};

const imgStyle = {
  height: '100%',
  padding: '0 25px',
  boxSizing: 'border-box',
  cursor: 'pointer',
  verticalAlign: 'top',
};

const imgSmallStyle = {
  height: '100%',
  padding: '0 12px',
  boxSizing: 'border-box',
  cursor: 'pointer',
  verticalAlign: 'top',
};

export default class Left extends Component {
  render() {
    return (
      <div style={divLeftStyle}>
        <MediaQuery minWidth={750}>
          <a href="http://litebyte.us" target="_blank" style={imgContainerStyle}>
            <img alt="logo" src="/assets/header_logo.svg" style={imgStyle}/>
          </a>
        </MediaQuery>
        <MediaQuery maxWidth={749}>
          <a href="http://litebyte.us" target="_blank" style={imgContainerStyle}>
            <img alt="logo" src="/assets/header_logo_small.svg" style={imgSmallStyle}/>
          </a>
        </MediaQuery>
      </div>
    );
  }
}

Left.propTypes = {};
