import React, {Component} from "react";
import InfoButton from "../InfoButton";
import {GridList, GridTile} from "material-ui/GridList";
import Neo from "./Neo";

const cellSize = 100;

const sectionStyle = {
  width: '50%',
  float: 'left',
  height: '100%',
};

const titleStyle = {
  margin: '0 0 25px 0',
  fontSize: '1.25em',
  fontWeight: 'normal',
};

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '100%',
    height: '100%',
    overflowY: 'auto',
  },
};

export default class ListSection extends Component {
  render() {
    return (
      <section style={sectionStyle}>
        <h2 style={titleStyle}>Near Earth Objects<InfoButton/></h2>
        <div style={styles.root}>
          <GridList cellHeight={cellSize} cols={0} style={styles.gridList}>
            {this.props.neos.map((neo, index) => (
              <GridTile key={index}>
                <Neo color={neo.color} terrain={neo.terrain} cellSize={cellSize}/>
              </GridTile>
            ))}
          </GridList>
        </div>
      </section>
    );
  }
}

ListSection.propTypes = {
  neos: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};
