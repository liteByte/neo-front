import React, {Component} from "react";

const containerStyle = {
  width: '40%',
  padding: 10,
  boxSizing: 'border-box',
  float: 'left',
  textAlign: 'center',
};

const descStyle = {
  fontFamily: 'Dosis, sans-serif',
  fontWeight: 'bold',
};

export default class Assessment extends Component {

  getImg = () => {
    return this.props.data ? 'danger' : 'safe';
  };

  render() {
    return (
      <div style={containerStyle}>
        <img src={`assets/${this.getImg()}.svg`} alt="Assessment"/>
        <div style={descStyle}>{this.props.data ? 'DANGEROUS' : 'SAFE'}</div>
      </div>
    );
  }
}

Assessment.propTypes = {
  data: React.PropTypes.bool.isRequired,
};
