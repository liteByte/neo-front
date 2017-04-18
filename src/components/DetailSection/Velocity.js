import React, {Component} from "react";
import MediaQuery from "react-responsive";
import InfoButton from "../InfoButton";

export default class Velocity extends Component {

  constructor(props) {
    super(props);

    this.state = {
      velocity: addCommas(this.props.data.velocity.toFixed(0)),
      missDistance: addCommas(this.props.data.missDistance.toFixed(2)),
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
        <MediaQuery minWidth={1325}>
          {matches => {
            return matches ?
              <div className="miss-title">MISS DISTANCE
                <span className="miss-number"> {this.state.missDistance}km</span>
                <InfoButton/>
              </div>
              :
              <div>
                <div className="miss-title">MISS DISTANCE<InfoButton size={24}/></div>
                <div className="miss-number">{this.state.missDistance}km</div>
              </div>
          }}
        </MediaQuery>
      </div>
    );
  }
}

Velocity.propTypes = {
  data: React.PropTypes.object.isRequired,
};
