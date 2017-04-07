import React, {Component} from "react";
import MediaQuery from "react-responsive";
import ListSection from "../ListSection/ListSection";
import ListSectionResponsive from "../ListSection/ListSectionResponsive";
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
        <MediaQuery minDeviceWidth={500}>
          {matches => {
            if (matches) return <ListSection/>;
            else return <ListSectionResponsive/>;
          }}
        </MediaQuery>
        <MediaQuery minDeviceWidth={500}>
          {matches => <EarthSection responsive={matches}/>}
        </MediaQuery>
      </main>
    );
  }
}
