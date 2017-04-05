import React, {Component} from "react";
import IconButton from "material-ui/IconButton";
import IconInfo from "material-ui/svg-icons/action/info-outline";

export default class InfoButton extends Component {

  style = {
    width: 32,
    height: 32,
    padding: 0,
    top: 5,
    left: 5,
    position: 'relative',
    cursor: 'help'
  };

  render() {
    return (
      <IconButton style={this.style}><IconInfo/></IconButton>
    )
  }
}
