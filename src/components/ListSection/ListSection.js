import React, {Component} from "react";
import InfoButton from "../InfoButton";
import {GridList, GridTile} from 'material-ui/GridList';

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

export default class ListSection extends Component {

  neos = [
    {
      img: 'assets/header_logo.svg'
    },
    {
      img: 'assets/header_logo.svg'
    },
    {
      img: 'assets/header_logo.svg'
    },
    {
      img: 'assets/header_logo.svg'
    },
    {
      img: 'assets/header_logo.svg'
    },
    {
      img: 'assets/header_logo.svg'
    },
    {
      img: 'assets/header_logo.svg'
    },
  ];

  render() {
    return (
      <section style={sectionStyle}>
        <h2 style={titleStyle}>Near Earth Objects<InfoButton/></h2>
        <div style={styles.root}>
          <GridList cellHeight={50} cols={0} style={styles.gridList}
          >
            {this.neos.map((neo, index) => (
              <GridTile key={index}>
                <img src={neo.img} alt="Neo"/>
              </GridTile>
            ))}
          </GridList>
        </div>
      </section>
    );
  }
}
