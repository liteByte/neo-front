import React, {Component} from "react";

const footerStyle = {
  width: "100%",
  height: 50,
  padding: 17,
  boxSizing: "border-box",
  background: '#0a0a0a',
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
