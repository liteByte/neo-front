import React, {Component} from "react";
import MediaQuery from "react-responsive";
import FlatButton from "material-ui/FlatButton";
import MenuItem from "material-ui/MenuItem";
import IconMoreVert from "material-ui/svg-icons/navigation/more-vert";
import IconButton from "material-ui/IconButton";
import Popover from "../Popover";


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

const menuButtonStyle = {
  height: "100%",
  marginRight: 5,
  float: "right"
};

export default class Header extends Component {
  render() {
    return (
      <header style={headerStyle}>
        <div style={divLeftStyle}>
          <img alt="logo" src="assets/header_logo.svg" style={imgStyle}/>
        </div>
        <div style={divRightStyle}>
          <MediaQuery minWidth={600} component="div" style={buttonContainerStyle}>
            <div style={buttonStyle}>
              <a href="http://litebyte.us/#contact" target="_blank">
                <FlatButton label="About Us" style={{height: "100%"}}/>
              </a>
            </div>
            <div style={buttonStyle}>
              <a href="https://github.com/liteByte/neo-front" target="_blank">
                <FlatButton label="Repository" style={{height: "100%"}}/>
              </a>
            </div>
          </MediaQuery>
          <MediaQuery maxWidth={600} component="div" style={menuButtonStyle}>
            <Popover component={<IconButton><IconMoreVert/></IconButton>}>
              <a href="http://litebyte.us/#contact" target="_blank">
                <MenuItem primaryText="About Us"/>
              </a>
              <a href="https://github.com/liteByte/neo-front" target="_blank">
                <MenuItem primaryText="Repository"/>
              </a>
            </Popover>
          </MediaQuery>
        </div>
      </header>
    );
  }
}
