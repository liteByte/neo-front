import React, {Component} from "react";
import Name from "./Name";
import Size from "./Size";
import Comparison from "./Comparison";
import Velocity from "./Velocity";
import Assessment from "./Assessment";

const containerStyle = {
  display: 'inline-block',
  backgroundColor: 'rgba(10, 10, 10, 0.65098)',
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
        <Size data={this.getSize()}/>
        <Comparison data={this.getComparison()}/>
        <Velocity data={this.getVelocity()}/>
        <Assessment data={this.getAssessment()}/>
      </div>
    );
  }
}

DetailSection.propTypes = {
  selectNeo: React.PropTypes.func.isRequired,
  neo: React.PropTypes.object.isRequired,
};
