import React, {Component} from "react";
import MediaQuery from "react-responsive";
import FlatButton from "material-ui/FlatButton";
import MenuItem from "material-ui/MenuItem";
import IconMoreVert from "material-ui/svg-icons/navigation/more-vert";
import IconButton from "material-ui/IconButton";
import DatePicker from "material-ui/DatePicker";
import Popover from "../Popover";

const DateTimeFormat = global.Intl.DateTimeFormat;

const headerStyle = {
  width: '100%',
  height: 50,
  minWidth: 300,
  display: 'flex',
  position: 'fixed',
  top: 0,
  zIndex: 1400,
  background: '#0a0a0a',
  willChange: 'transform',
};

const divLeftStyle = {
  height: '100%',
  flex: 1,
};

const divCenterStyle = {
  height: '100%',
  flex: 1,
  textAlign: 'center',
  color: 'white',
};

const divRightStyle = {
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

    const minDate = new Date();
    const maxDate = new Date();
    minDate.setFullYear(minDate.getFullYear() - 3);
    minDate.setHours(0, 0, 0, 0);
    maxDate.setFullYear(maxDate.getFullYear() + 3);
    maxDate.setHours(0, 0, 0, 0);

    this.state = {
      minDate: minDate,
      maxDate: maxDate,
    };
  }

  render() {
    return (
      <header style={headerStyle}>

        <MediaQuery minWidth={750} component="div" style={divLeftStyle}>
          <a href="http://litebyte.us" target="_blank" style={imgContainerStyle}>
            <img alt="logo" src="/assets/header_logo.svg" style={imgStyle}/>
          </a>
        </MediaQuery>
        <MediaQuery maxWidth={749} component="div" style={divLeftStyle}>
          <a href="http://litebyte.us" target="_blank" style={imgContainerStyle}>
            <img alt="logo" src="/assets/header_logo_small.svg" style={imgSmallStyle}/>
          </a>
        </MediaQuery>

        <div style={divCenterStyle}>
          <DatePicker
            hintText="Landscape Dialog"
            value={this.props.date}
            onChange={this.props.handleDate}
            autoOk={true}
            minDate={this.state.minDate}
            maxDate={this.state.maxDate}
            formatDate={
              new DateTimeFormat('en-US', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              }).format
            }
            textFieldStyle={{width: '100%', maxWidth: 256, minWidth: 180}}
            inputStyle={{textAlign: 'center'}}
          />
        </div>

        <MediaQuery minWidth={750} component="div" style={divRightStyle}>
          <div style={buttonContainerStyle}>
            <div style={buttonStyle}>
              <FlatButton label="About Us" style={{height: "100%"}} onClick={() => this.props.setAboutOpen(true)}/>
            </div>
            <div style={buttonStyle}>
              <a href="https://github.com/liteByte/neo-front" target="_blank">
                <FlatButton label="Repository" style={{height: "100%"}}/>
              </a>
          </div>
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={749} component="div" style={divRightStyle}>
          <div style={menuButtonStyle}>
            <Popover component={<IconButton><IconMoreVert/></IconButton>}>
              <MenuItem primaryText="About Us" onClick={() => this.props.setAboutOpen(true)}/>
              <a href="https://github.com/liteByte/neo-front" target="_blank" style={aStyle}>
                <MenuItem primaryText="Repository"/>
              </a>
            </Popover>
          </div>
        </MediaQuery>

      </header>
    );
  }
}

Header.propTypes = {
  date: React.PropTypes.object.isRequired,
  handleDate: React.PropTypes.func.isRequired,
  setAboutOpen: React.PropTypes.func.isRequired,
};
