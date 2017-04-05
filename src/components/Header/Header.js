import React, {Component} from "react";
import FlatButton from "material-ui/FlatButton";

const headerStyle = {
  width: "100%",
  height: 50,
  background: '#0a0a0a'
};

const divLeftStyle = {
  width: "50%",
  height: "100%",
  float: "left"
};

const divRightStyle = {
  width: "50%",
  height: "100%",
  float: "left"
};

const imgStyle = {
  height: "100%",
  marginLeft: 25,
  cursor: "pointer",
  verticalAlign: "top"
};

const buttonContainerStyle = {
  height: "100%",
  marginRight: 25,
  float: "right"
};

const buttonStyle = {
  height: "100%",
  float: "left"
};

export default class Header extends Component {
  render() {
    return (
      <header style={headerStyle}>
        <div style={divLeftStyle}>
          <img alt="logo" src="assets/header_logo.svg" style={imgStyle}/>
        </div>
        <div style={divRightStyle}>
          <div style={buttonContainerStyle}>
            <div style={buttonStyle}><a href="http://litebyte.us/#contact"><FlatButton label="About Us" style={{height: "100%"}}/></a></div>
            <div style={buttonStyle}><a href="https://github.com/liteByte/neo-front"><FlatButton label="Repository" style={{height: "100%"}}/></a></div>
          </div>
        </div>
      </header>
    );
  }
}
