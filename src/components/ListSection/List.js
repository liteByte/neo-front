import React, {Component} from "react";
import {GridList, GridTile} from "material-ui/GridList";
import Neo from "./Neo";

const cellSize = 100;

const styles = {
  gridList: {
    width: '100%',
    height: '100%',
    overflowY: 'auto',
    overflowX: 'hidden',
  },
};

export default class List extends Component {
  render() {
    return (
      <GridList cellHeight={cellSize} cols={0} style={styles.gridList}>
        {this.props.neos.map((neo, index) => (
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
};
