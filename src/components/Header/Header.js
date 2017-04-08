import React, {Component} from "react";
import MediaQuery from "react-responsive";
import FlatButton from "material-ui/FlatButton";
import MenuItem from "material-ui/MenuItem";
import IconMoreVert from "material-ui/svg-icons/navigation/more-vert";
import IconButton from "material-ui/IconButton";
import Popover from "../Popover";
import AboutUs from "../AboutUs/AboutUs";


const headerStyle = {
  width: '100%',
  height: 50,
  position: 'fixed',
  top: 0,
  zIndex: 1400,
  background: '#0a0a0a',
};

const divLeftStyle = {
  width: '50%',
  height: '100%',
  float: 'left',
};

const divRightStyle = {
  width: '50%',
  height: '100%',
  float: 'left',
};

const imgStyle = {
  height: '100%',
  marginLeft: 25,
  cursor: 'pointer',
  verticalAlign: 'top',
};

const buttonContainerStyle = {
  height: '100%',
  marginRight: 25,
  float: 'right'
};

const buttonStyle = {
  height: '100%',
  float: 'left',
};

const menuButtonStyle = {
  height: '100%',
  marginRight: 5,
  float: 'right',
};

const aStyle = {
  textDecoration: 'none'
};

export default class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      aboutUs: true
    };
  }

  setAboutOpen = (open) => {
    this.setState({
      aboutUs: open
    });
  };

  render() {
    return (
      <header style={headerStyle}>
        <AboutUs open={this.state.aboutUs} setOpen={this.setAboutOpen}/>
        <div style={divLeftStyle}>
          <img alt="logo" src="assets/header_logo.svg" style={imgStyle}/>
        </div>
        <div style={divRightStyle}>
          <MediaQuery minWidth={600} component="div" style={buttonContainerStyle}>
            <div style={buttonStyle}>
              <FlatButton label="About Us" style={{height: "100%"}} onClick={() => this.setAboutOpen(true)}/>
            </div>
            <div style={buttonStyle}>
              <a href="https://github.com/liteByte/neo-front" target="_blank">
                <FlatButton label="Repository" style={{height: "100%"}}/>
              </a>
            </div>
          </MediaQuery>
          <MediaQuery maxWidth={600} component="div" style={menuButtonStyle}>
            <Popover component={<IconButton><IconMoreVert/></IconButton>}>
              <MenuItem primaryText="About Us" onClick={() => this.setAboutOpen(true)}/>
              <a href="https://github.com/liteByte/neo-front" target="_blank" style={aStyle}>
                <MenuItem primaryText="Repository"/>
              </a>
            </Popover>
          </MediaQuery>
        </div>
      </header>
    );
  }
}
