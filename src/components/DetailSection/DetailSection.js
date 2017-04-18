import React, {Component} from "react";
import Name from "./Name";
import Size from "./Size";
import Comparison from "./Comparison";
import Velocity from "./Velocity";
import Assessment from "./Assessment";

const containerStyle = {
  height: 'calc(100% - 58px)',
  padding: 10,
  boxSizing: 'border-box',
  display: 'inline-block',
  overflowY: 'auto',
  backgroundColor: 'rgba(10, 10, 10, 0.65098)',
};

const rowStyle = {
  display: 'inline-block',
  width: '100%',
  marginBottom: 20,
};

export default class DetailSection extends Component {

  getName = () => {
    return this.props.neo;
  };

  getSize = () => {
    const neo = this.props.neo;
    return neo.size;
  };

  getComparison = () => {
    const neo = this.props.neo;
    return neo.size.avg;
  };

  getVelocity = () => {
    const neo = this.props.neo;
    return neo.approach;
  };

  getAssessment = () => {
    const neo = this.props.neo;
    return neo.isDangerous;
  };

  render() {
    return (
      <div style={containerStyle}>
        <Name data={this.getName()}/>
        <div style={rowStyle}>
          <Size data={this.getSize()}/>
          <Comparison data={this.getComparison()}/>
        </div>
        <div style={rowStyle}>
          <Velocity data={this.getVelocity()}/>
          <Assessment data={this.getAssessment()}/>
        </div>
      </div>
    );
  }
}

DetailSection.propTypes = {
  selectNeo: React.PropTypes.func.isRequired,
  neo: React.PropTypes.object.isRequired,
};
