import React, {Component} from "react";
import InfoButton from "../InfoButton";

const containerStyle = {
  width: '60%',
  padding: 10,
  boxSizing: 'border-box',
  float: 'left',
};

const imgStyle = {
  width: '25%',
  marginTop: 5,
  float: 'left',
};

const numberContainerStyle = {
  width: '75%',
  paddingLeft: 5,
  boxSizing: 'border-box',
  float: 'left',
};

const numberStyle = {
  fontSize: '1.75em',
  fontFamily: 'Dosis, sans-serif',
};

const unitStyle = {
  fontSize: '1.25rem',
};

const missStyle = {
  width: '100%',
  float: 'left',
  textAlign: 'center',
};

export default class Velocity extends Component {

  constructor(props) {
    super(props);

    this.state = {
      velocity: this.props.data.velocity.toFixed(0),
      missDistance: this.props.data.missDistance.toFixed(2),
    };
  }

  render() {
    return (
      <div style={containerStyle}>
        <div style={imgStyle}><img src="assets/velocidad.svg" alt="Vector" width="100%"/></div>
        <div style={numberContainerStyle}>
          <div>VELOCITY</div>
          <div style={numberStyle}>{this.state.velocity} <span style={unitStyle}>km/h</span></div>
        </div>
        <div style={missStyle}>MISS DISTANCE {this.state.missDistance} <InfoButton/></div>
      </div>
    );
  }
}

Velocity.propTypes = {
  data: React.PropTypes.object.isRequired,
};
