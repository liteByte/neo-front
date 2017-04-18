import React, {Component} from "react";
import Divider from "material-ui/Divider";
import Neo from "../ListSection/Neo";

const height = 100;
const neoWidth = 100;

const containerStyle = {
  height: height + 20,
  width: '100%',
  padding: 10,
  boxSizing: 'border-box',
  float: 'left',
};

const neoContainerStyle = {
  width: neoWidth,
  height: '100%',
  float: 'left'
};

const nameContainerStyle = {
  width: `calc(100% - ${neoWidth}px)`,
  height: '100%',
  paddingLeft: 10,
  boxSizing: 'border-box',
  float: 'left',
};

const idStyle = {
  marginTop: 10,
  fontSize: '1.2em',
};

const nameStyle = {
  margin: '8px 0 0 0',
  fontFamily: 'Dosis, sans-serif',
  fontSize: '2.5em',
  width: '100%',
  overflowX: 'hidden',
  height: 50,
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
};

const dividerStyle = {
  width: '100%',
  height: 2,
  marginTop: 5,
  float: 'left',
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
          <h2 style={nameStyle} title={this.props.data.name}>{this.props.data.name}</h2>
        </div>
        <Divider style={dividerStyle}/>
      </div>
    );
  }
}

Name.propTypes = {
  data: React.PropTypes.object.isRequired,
};
