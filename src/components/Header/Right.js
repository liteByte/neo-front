import React, {Component} from "react";
import MediaQuery from "react-responsive";
import FlatButton from "material-ui/FlatButton";
import MenuItem from "material-ui/MenuItem";
import IconMoreVert from "material-ui/svg-icons/navigation/more-vert";
import IconButton from "material-ui/IconButton";
import Popover from "../Popover";

const divRightStyle = {
  height: '100%',
  flex: 1,
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

export default class Right extends Component {
  render() {
    return (
      <div style={divRightStyle}>
        <MediaQuery minWidth={850} component="div" style={buttonContainerStyle}>
          <div style={buttonStyle}>
            <FlatButton label="About Us" style={{height: "100%"}} onClick={() => this.props.handleAbout(true)}/>
          </div>
          <div style={buttonStyle}>
            <a href="https://github.com/liteByte/neo-front" target="_blank">
              <FlatButton label="Repository" style={{height: "100%"}}/>
            </a>
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={849} component="div" style={menuButtonStyle}>
          <Popover component={<IconButton><IconMoreVert/></IconButton>}>
            <MenuItem primaryText="About Us" onClick={() => this.props.handleAbout(true)}/>
            <a href="https://github.com/liteByte/neo-front" target="_blank" style={aStyle}>
              <MenuItem primaryText="Repository"/>
            </a>
          </Popover>
        </MediaQuery>
      </div>
    );
  }
}

Right.propTypes = {
  handleAbout: React.PropTypes.func.isRequired,
};
