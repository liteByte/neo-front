import React, {Component} from "react";
import InfoButton from "../InfoButton";

const containerStyle = {
  width: '55%',
  padding: 10,
  boxSizing: 'border-box',
  float: 'left',
};

const rowStyle = {
  width: '100%',
  height: 60,
  float: 'left',
};

const imgStyle = {
  width: '30%',
  height: '100%',
  float: 'left',
};

const numberContainerStyle = {
  width: '70%',
  paddingLeft: 10,
  boxSizing: 'border-box',
  float: 'left',
};

const numberStyle = {
  fontSize: '2.3em',
  fontFamily: 'Dosis, sans-serif',
  fontWeight: 'bold',
};

const unitStyle = {
  fontSize: '1.25rem',
  fontWeight: 'normal',
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
        <div style={rowStyle}>
          <div style={imgStyle}><img src="assets/velocidad.svg" alt="Vector" height="100%"/></div>
          <div style={numberContainerStyle}>
            <div style={{fontSize: '.85em'}}>VELOCITY</div>
            <div style={numberStyle}>{this.state.velocity}<span style={unitStyle}>km/h</span></div>
          </div>
        </div>
        <div style={{width: '100%', float: 'left', fontSize: '.85em'}}>MISS DISTANCE<InfoButton size={24}/></div>
        <div style={{width: '100%', float: 'left', marginTop: 5, fontSize: '1.3em'}}>{this.state.missDistance}km</div>
      </div>
    );
  }
}

Velocity.propTypes = {
  data: React.PropTypes.object.isRequired,
};
