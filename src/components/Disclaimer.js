import React, {Component} from "react";
import InfoButton from "./InfoButton";

const disclaimerStyle = {
  position: 'fixed',
  right: 10,
  bottom: 5,
  color: '#c7c7c7',
  zIndex: 3000,
};

export default class Disclaimer extends Component {
  render() {
    return (
      <div style={disclaimerStyle}>
        <InfoButton
          color="#c7c7c7"
          title="Disclaimer"
          description="NEOs don't really look like little planets and the drawings are not to scale. That being said, all the numbers are correct."
        />
      </div>
    )
  }
}

Disclaimer.propTypes = {};
