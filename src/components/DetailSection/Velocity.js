import React, {Component} from "react";
import InfoButton from "../InfoButton";

export default class Velocity extends Component {

  constructor(props) {
    super(props);
    this.updateState(props);
  }

  componentWillReceiveProps(nextProps) {
    this.updateState(nextProps);
  }

  updateState(props) {
    this.state = {
      velocity: addCommas(props.data.velocity.toFixed(0)),
      missDistance: addCommas(props.data.missDistance.toFixed(2)),
    };

    function addCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }

  render() {
    return (
      <div className="velocity-container">
        <div className="row">
          <div className="image"><img src="assets/velocidad.svg" alt="Vector" height="100%"/></div>
          <div className="number-container">
            <div className="number-title">VELOCITY</div>
            <div className="number-number">{this.state.velocity}<span className="unit">km/h</span></div>
          </div>
        </div>
        <div className="miss-small">
          <div className="miss-title">
            MISS DISTANCE
            <InfoButton
              size={24}
              title="MISS DISTANCE"
              description="The minimum separation between two bodies (the closest it will get to Earth)."/>
          </div>
          <div className="miss-number">{this.state.missDistance}km</div>
        </div>
        <div className="miss-big">
          <div className="miss-title">MISS DISTANCE
            <span className="miss-number"> {this.state.missDistance}km</span>
            <InfoButton
              title="MISS DISTANCE"
              description="The minimum separation between two bodies (the closest it will get to Earth)."/>
          </div>
        </div>
      </div>
    );
  }
}

Velocity.propTypes = {
  data: React.PropTypes.object.isRequired,
};
