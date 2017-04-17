import React, {Component} from "react";

const containerStyle = {
  width: '40%',
  padding: 10,
  boxSizing: 'border-box',
  float: 'left',
  textAlign: 'center',
};

const imgStyle = {
  width: '100%',
  height: 60,
  float: 'left',
};

const descStyle = {
  width: '100%',
  marginTop: 10,
  float: 'left',
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
        <div style={imgStyle}><img src={`assets/${this.getImg()}.svg`} alt="Assessment" height="100%"/></div>
        <div style={descStyle}>{this.props.data ? 'DANGEROUS' : 'SAFE'}</div>
      </div>
    );
  }
}

Assessment.propTypes = {
  data: React.PropTypes.bool.isRequired,
};
