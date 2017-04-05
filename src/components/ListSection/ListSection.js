import React, {Component} from "react";
import InfoButton from "../InfoButton";

const sectionStyle = {
  width: '50%',
  float: 'left',
  height: '100%',
};

const titleStyle = {
  margin: 0,
  fontSize: '1.25em',
  fontWeight: 'normal',
};

export default class ListSection extends Component {
  render() {
    return (
      <section style={sectionStyle}>
        <h2 style={titleStyle}>Near Earth Objects<InfoButton/></h2>
      </section>
    );
  }
}
