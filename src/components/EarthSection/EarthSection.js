import React, {Component} from "react";

const sectionStyle = {
  width: '50%',
  float: 'left',
  height: '100%',
};

const titleStyle = {
  margin: '10px 0 25px 0',
  fontSize: '1.25em',
  fontWeight: 'normal',
};

export default class EarthSection extends Component {
  render() {
    return (
      <section style={sectionStyle}>
        <h2 style={titleStyle}>Earth</h2>
      </section>
    );
  }
}

EarthSection.propTypes = {};
