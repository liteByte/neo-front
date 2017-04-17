import React, {Component} from "react";

const containerStyle = {
  width: '65%',
  padding: 10,
  boxSizing: 'border-box',
  float: 'left',
  textAlign: 'center',
};

const sizeStyle = {
  fontSize: '3em',
  fontWeight: 'bold',
  fontFamily: 'Dosis, sans-serif',
  lineHeight: '1em',
};

const errorStyle = {
  fontSize: '1.25em',
};

export default class Size extends Component {

  constructor(props) {
    super(props);

    this.state = {
      size: this.props.data.avg.toFixed(2),
      error: ((this.props.data.max - this.props.data.min) / 2).toFixed(2),
    };
  }

  render() {
    return (
      <div style={containerStyle}>
        <div style={sizeStyle}>{this.state.size}<span style={{fontWeight: 'normal'}}> m</span></div>
        <div style={errorStyle}>&plusmn;{this.state.error} m</div>
      </div>
    );
  }
}

Size.propTypes = {
  data: React.PropTypes.object.isRequired,
};
