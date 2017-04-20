import React, {Component} from "react";
import Measure from "react-measure";
import SpaceObject from "./SpaceObject";

const spaceStyle = {
  width: '100%',
  height: 'calc(100% - 60px)',
  position: 'relative',
};

export default class EarthSection extends Component {
  render() {
    return (
      <Measure>
        { dimensions =>
          <div style={spaceStyle}>
            <SpaceObject dimensions={dimensions} angle={0} distance={0} size={100}>
              <img src="/assets/tierra_nubes.svg" alt="Earth" style={{maxWidth: '100%', maxHeight: '100%'}}/>
            </SpaceObject>
          </div>
        }
      </Measure>
    );
  }
}

EarthSection.propTypes = {};
