import React, {Component} from "react";
import Neo from "../ListSection/Neo";

const height = 100;
const neoWidth = 100;

const containerStyle = {
  height,
  padding: '10px 0',
  margin: 10,
  float: 'left',
  borderBottom: 'solid 2px rgba(255, 255, 255, 0.298039)',
};

const neoContainerStyle = {
  width: neoWidth,
  height: '100%',
  float: 'left'
};

const nameContainerStyle = {
  width: `calc(100% - ${neoWidth}px)`,
  height: '100%',
  float: 'left',
};

const idStyle = {
  marginTop: 10,
};

const nameStyle = {
  margin: '10px 0 0 0',
  fontFamily: 'Dosis, sans-serif',
  fontSize: '2em',
};

export default class Name extends Component {
  render() {
    return (
      <div style={containerStyle}>
        <div style={neoContainerStyle}>
          <Neo data={this.props.data} cellSize={neoWidth}/>
        </div>
        <div style={nameContainerStyle}>
          <div style={idStyle}>ID: {this.props.data.id}</div>
          <h2 style={nameStyle}>{this.props.data.name}</h2>
        </div>
      </div>
    );
  }
}

Name.propTypes = {
  data: React.PropTypes.object.isRequired,
};
