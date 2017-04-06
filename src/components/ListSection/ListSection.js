import React, {Component} from "react";
import InfoButton from "../InfoButton";
import {GridList, GridTile} from 'material-ui/GridList';

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
    width: "100%",
    height: "100%",
    overflowY: 'auto',
  },
};

const tileStyle = {
  width: cellSize,
  padding: 10,
  boxSizing: 'border-box',
};

const imgStyle = {
  width: "100%",
  height: "100%",
};

export default class ListSection extends Component {

  neos = [
    {
      img: 'assets/tierra_nubes.svg'
    },
    {
      img: 'assets/tierra_nubes.svg'
    },
    {
      img: 'assets/tierra_nubes.svg'
    },
    {
      img: 'assets/tierra_nubes.svg'
    },
    {
      img: 'assets/tierra_nubes.svg'
    },
    {
      img: 'assets/tierra_nubes.svg'
    },
    {
      img: 'assets/tierra_nubes.svg'
    },
  ];

  render() {
    return (
      <section style={sectionStyle}>
        <h2 style={titleStyle}>Near Earth Objects<InfoButton/></h2>
        <div style={styles.root}>
          <GridList cellHeight={cellSize} cols={0} style={styles.gridList}>
            {this.neos.map((neo, index) => (
              <GridTile key={index}>
                <div style={tileStyle}>
                  <img src={neo.img} alt="Neo" style={imgStyle}/>
                </div>
              </GridTile>
            ))}
          </GridList>
        </div>
      </section>
    );
  }
}
