import React, {Component} from "react";
import Earth from "./Earth";

const spaceStyle = {
  width: '100%',
  height: 'calc(100% - 60px)',
  position: 'relative',
};

const earthStyle = {
  width: '25%',
  height: '25%',
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)'
};

export default class EarthSection extends Component {
  render() {
    return (
      <div style={spaceStyle}>
        <Earth style={earthStyle}/>
      </div>
    );
  }
}

EarthSection.propTypes = {};
