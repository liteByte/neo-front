import React, {Component} from "react";
import Measure from "react-measure";
import Dialog from "material-ui/Dialog";
import Divider from "material-ui/Divider";
import IconButton from "material-ui/IconButton";
import IconClose from "material-ui/svg-icons/navigation/close";
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

const bodyStyle = {
  ...style,
};

const closeStyle = {
  position: 'absolute',
  top: 0,
  right: 0,
};

const dividerStyle = {
  width: 'calc(100% - 48px)',
  height: 2,
  position: 'fixed',
};

const containerStyle = {
  margin: '0 auto',
  maxWidth: 512,
  textAlign: 'center',
  color: 'rgba(255, 255, 255, .9)',
};

const earthContainerStyle = {
  martinTop: 15,
  position: 'relative',
};

const earthStyle = {
  transform: 'translateX(6px)',
};

const weAreHereStyle = {
  position: 'absolute',
  top: '66%',
  left: 'calc(50% + 100px)',
};

const spanStyle = {
  marginRight: 10,
};

const iconStyle = {
  position: 'relative',
  top: 7,
};

const aStyle = {
  textDecoration: 'none'
};

export default class AboutUs extends Component {
  render() {
    return (
      <Dialog
        title="ABOUT US"
        open={this.props.open}
        onRequestClose={() => this.props.setOpen(false)}
        autoScrollBodyContent={true}
        contentStyle={style}
        bodyStyle={bodyStyle}
        titleStyle={titleStyle}
        actionsContainerStyle={style}
      >
        <IconButton style={closeStyle} onClick={() => this.props.setOpen(false)}><IconClose/></IconButton>
        <Divider style={dividerStyle}/>
        <Measure>
          { dimensions =>
            <div style={containerStyle}>

              { dimensions.width > 310 ?
                <div style={earthContainerStyle}>
                  <img src="/assets/earth/earth-with-line.svg" alt="Where we are" style={earthStyle} height={150}/>
                  <div style={weAreHereStyle}>We are here</div>
                </div>
                :
                <div style={earthContainerStyle}>
                  <img src="/assets/earth/earth-circle.svg" alt="Where we are" style={earthStyle} height={150}/>
                </div>
              }

              <p>We are a small development company located in Buenos Aires, Argentina,
                focused on delivering quality software.</p>
              <p>
                <span style={spanStyle}>Find us:</span>
                <a href="http://litebyte.us" target="_blank" style={aStyle}>
                  <IconButton style={iconStyle} tooltip="Website"><WebIcon/></IconButton>
                </a>
                <a href="https://github.com/liteByte/neo-front" target="_blank" style={aStyle}>
                  <IconButton style={iconStyle} tooltip="Github"><GithubIcon/></IconButton>
                </a>
              </p>
            </div>
          }
        </Measure>
      </Dialog>
    );
  }
}

AboutUs.propTypes = {
  open: React.PropTypes.bool.isRequired,
  setOpen: React.PropTypes.func.isRequired,
};
