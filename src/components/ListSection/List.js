import React, {Component} from "react";
import {GridList, GridTile} from "material-ui/GridList";
import Neo from "./Neo";

const cellSize = 100;

const pStyle = {
  marginLeft: 10,
};

export default class List extends Component {

  getStyle = () => {
    return {
      width: '100%',
      height: '100%',
      maxHeight: this.props.maxHeight,
      overflowY: 'auto',
      overflowX: 'hidden',
    }
  };

  render() {
    return (
      <GridList cellHeight={cellSize} cols={0} style={this.getStyle()}>
        {this.props.neos.length === 0 ?
          <p style={pStyle}>Looking for NEOs...</p>
          :
          this.props.neos.map((neo, index) => (
            <GridTile key={index}>
              <Neo data={neo} cellSize={cellSize} selectNeo={this.props.selectNeo}/>
            </GridTile>
          ))}
      </GridList>
    );
  }
}

List.propTypes = {
  neos: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  selectNeo: React.PropTypes.func.isRequired,
  maxHeight: React.PropTypes.number,
};
