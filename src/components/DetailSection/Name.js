import React, {Component} from "react";
import Divider from "material-ui/Divider";
import Neo from "../ListSection/Neo";

const height = 100;
const neoWidth = 100;

const containerStyle = {
  height: height + 20,
};

const neoContainerStyle = {
  width: neoWidth,
};

const nameContainerStyle = {
  width: `calc(100% - ${neoWidth}px)`,
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
      <div style={containerStyle} className="name-container">
        <div style={neoContainerStyle} className="neo-container">
          <Neo data={this.props.data} cellSize={neoWidth}/>
        </div>
        <div style={nameContainerStyle} className="container">
          <div className="id">ID: {this.props.data.id}</div>
          <h2 className="name" title={this.props.data.name}>{this.props.data.name}</h2>
        </div>
        <Divider style={dividerStyle}/>
      </div>
    );
  }
}

Name.propTypes = {
  data: React.PropTypes.object.isRequired,
};
