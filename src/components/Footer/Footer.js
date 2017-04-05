import React, {Component} from "react";
import {grey900} from "material-ui/styles/colors";

const footerStyle = {
  width: "100%",
  height: 50,
  padding: 17,
  boxSizing: "border-box",
  background: grey900,
  color: "#fff",
  fontSize: ".80em",
  fontWeight: 100,
  textAlign: "center",
};

export default class Footer extends Component {
  render() {
    return (
      <footer style={footerStyle}>
        developed by liteByte and powered by NASA's API
      </footer>
    );
  }
}
