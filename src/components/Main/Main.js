import React, { Component } from "react";
import ListSection from "../ListSection/ListSection";
import EarthSection from "../EarthSection/EarthSection";

const style = {
  height: 'calc(100% - 100px)',
  padding: 25,
  boxSizing: 'border-box',
  overflow: 'auto',
  color: '#fff'
};

export default class Main extends Component {
  render() {
    return (
      <main style={style}>
        <ListSection/>
        <EarthSection/>
      </main>
    );
  }
}
