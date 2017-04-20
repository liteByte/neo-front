import React, {Component} from "react";
import Measure from "react-measure";
import SpaceObject from "./SpaceObject";

const spaceStyle = {
  width: '100%',
  position: 'relative',
};

export default class Space extends Component {
  render() {
    return (
      <Measure>
        { dimensions =>
          <div style={spaceStyle} className="space">
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

Space.propTypes = {
  neos: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  selectNeo: React.PropTypes.func.isRequired,
};
