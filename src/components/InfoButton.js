import React, {Component} from "react";
import IconButton from "material-ui/IconButton";
import IconInfo from "material-ui/svg-icons/action/info-outline";
import Popover from "material-ui/Popover";
import Paper from "material-ui/Paper";

const paperStyle = {
  padding: 10,
  fontSize: '.8em',
  maxWidth: 250,
  background: 'rgba(255, 251, 251, .8)',
  color: '#000',
};

const titleStyle = {
  marginTop: 0,
};

export default class InfoButton extends Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  iconStyle = {
    width: this.props.size || 32,
    height: this.props.size || 32,
    padding: 0,
    top: 5,
    left: 5,
    position: 'relative',
    cursor: 'help'
  };

  handleTouchTap = (event) => {
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <IconButton
        style={this.iconStyle}
        onTouchTap={this.handleTouchTap}
      >
        <IconInfo/>
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
        >
          <Paper zDepth={2} style={paperStyle}>
            <h3 style={titleStyle}>{this.props.title}</h3>
            <p>{this.props.description}</p>
          </Paper>
        </Popover>
      </IconButton>
    )
  }
}

InfoButton.propTypes = {
  size: React.PropTypes.number,
  title: React.PropTypes.string,
  description: React.PropTypes.string,
};
