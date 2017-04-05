import React, {Component} from "react";
import IconButton from "material-ui/IconButton";
import IconInfo from "material-ui/svg-icons/action/info-outline";

const titleStyle = {
  fontSize: '1.25em',
  fontWeight: 'normal'
};

const iconInfoStyle = {
  top: 5,
  left: 5,
  position: 'relative',
  cursor: 'help'
};


export default class ListSection extends Component {
  render() {
    return (
      <div>
        <h2 style={titleStyle}>Near Earth Objects<IconButton style={iconInfoStyle}><IconInfo/></IconButton></h2>
      </div>
    );
  }
}
