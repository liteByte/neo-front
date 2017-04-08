import React, {Component} from "react";
import Dialog from "material-ui/Dialog";
import Divider from "material-ui/Divider";
import IconButton from "material-ui/IconButton";
import WebIcon from "./WebIcon";
import GithubIcon from "./GithubIcon";

const backgroundColor = '#122b3a';

const style = {
  backgroundColor: backgroundColor
};

const titleStyle = {
  ...style,
  textAlign: 'center',
};

const dividerStyle = {
  height: 2,
  margin: '0 0 15px 0',
};

const containerStyle = {
  margin: '0 auto',
  maxWidth: 512,
  textAlign: 'center',
  color: 'rgba(255, 255, 255, .9)',
};

const spanStyle = {
  marginRight: 10,
};

const iconStyle = {
  position: 'relative',
  top: 7,
};

export default class AboutUs extends Component {
  render() {
    return (
      <Dialog
        title="ABOUT US"
        open={this.props.open}
        onRequestClose={() => this.props.setOpen(false)}
        contentStyle={style}
        bodyStyle={style}
        titleStyle={titleStyle}
        actionsContainerStyle={style}
      >
        <Divider style={dividerStyle}/>
        <div style={containerStyle}>
          <img src="/assets/tierra_sinnubes.svg" alt="Where we are"/>
          <p>We are a small development company located in Buenos Aires, Argentina,
            focused on delivering quality software.</p>
          <p>
            <span style={spanStyle}>Find us:</span>
            <IconButton style={iconStyle} tooltip="Website"><WebIcon/></IconButton>
            <IconButton style={iconStyle} tooltip="Github"><GithubIcon/></IconButton>
          </p>
        </div>
      </Dialog>
    );
  }
}

AboutUs.propTypes = {
  open: React.PropTypes.bool.isRequired,
  setOpen: React.PropTypes.func.isRequired,
};
