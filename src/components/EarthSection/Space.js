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
            <SpaceObject dimensions={dimensions} data={{display: {size: 2, distance: 0, angle: 0}}}>
              <img src="/assets/tierra_nubes.svg" alt="Earth" style={{maxWidth: '100%', maxHeight: '100%'}}/>
            </SpaceObject>
            {this.props.neos.map((neo, index) =>
              <SpaceObject key={index} dimensions={dimensions} data={neo} selectNeo={this.props.selectNeo}/>
            )}
          </div>
        }
      </Measure>
    );
  }
}

EarthSection.propTypes = {
  neos: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  selectNeo: React.PropTypes.func.isRequired,
};
