import React, {Component} from "react";
import FlatButton from "material-ui/FlatButton";
import {grey900} from "material-ui/styles/colors";

const headerStyle = {
  width: "100%",
  height: 50,
  display: "inline-block",
  background: grey900
};

const divLeftStyle = {
  width: "50%",
  height: "100%",
  float: "left"
};

const divRightStyle = {
  width: "50%",
  height: "100%",
  float: "left",
  textAlign: "right"
};

const buttonContainerStyle = {
  height: "100%",
  display: "inline-block"
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
          <img alt="logo"/>
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
