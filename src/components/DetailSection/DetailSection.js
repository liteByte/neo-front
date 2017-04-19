import React, {Component} from "react";
import IconButton from "material-ui/IconButton";
import IconClose from "material-ui/svg-icons/navigation/close";
import Name from "./Name";
import Size from "./Size";
import Comparison from "./Comparison";
import Velocity from "./Velocity";
import Assessment from "./Assessment";

const closeStyle = {
  position: 'absolute',
  top: 0,
  right: 0,
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
      <div className={"detail-container " + this.props.class}>
        <IconButton style={closeStyle} onClick={() => this.props.selectNeo(null)}><IconClose/></IconButton>
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
  class: React.PropTypes.string.isRequired,
  selectNeo: React.PropTypes.func.isRequired,
  neo: React.PropTypes.object.isRequired,
};
