import React, {Component} from "react";

export default class Assessment extends Component {

  getImg = () => {
    return this.props.data ? 'danger' : 'safe';
  };

  render() {
    return (
      <div className="assessment-container">
        <div className="image"><img src={`assets/${this.getImg()}.svg`} alt="Assessment" height="100%"/></div>
        <div className="description">{this.props.data ? 'DANGEROUS' : 'SAFE'}</div>
      </div>
    );
  }
}

Assessment.propTypes = {
  data: React.PropTypes.bool.isRequired,
};
