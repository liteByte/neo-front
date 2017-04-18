import React, {Component} from "react";
import Name from "./Name";
import Size from "./Size";
import Comparison from "./Comparison";
import Velocity from "./Velocity";
import Assessment from "./Assessment";

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
      <div className="detail-container">
        <Name data={this.getName()}/>
        <div className="row">
          <Size data={this.getSize()}/>
          <Comparison data={this.getComparison()}/>
        </div>
        <div className="row">
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
