import React, {Component} from "react";
import MediaQuery from "react-responsive";
import ListSection from "../ListSection/ListSection";
import ListSectionResponsive from "../ListSection/ListSectionResponsive";
import EarthSection from "../EarthSection/EarthSection";
import EarthSectionResponsive from "../EarthSection/EarthSectionResponsive";

const style = {
  height: '100%',
  padding: '75px 25px',
  boxSizing: 'border-box',
  overflow: 'auto',
  color: '#fff'
};

export default class Main extends Component {

  neos = [
    {
      color: 2,
      terrain: 4,
    },
    {
      color: 0,
      terrain: 5,
    },
    {
      color: 1,
      terrain: 1,
    },
    {
      color: 3,
      terrain: 1,
    },
    {
      color: 0,
      terrain: 0,
    },
    {
      color: 3,
      terrain: 2,
    },
    {
      color: 1,
      terrain: 4,
    }
  ];

  constructor(props) {
    super(props);

    this.state = {
      drawer: false,
    }
  }

  setDrawerOpen = (open) => {
    this.setState({
      drawer: open,
    })
  };

  render() {
    return (
      <main style={style}>
        <MediaQuery minWidth={500}>
          {matches => {
            return matches ?
              <ListSection neos={this.neos}/>
              :
              <ListSectionResponsive neos={this.neos} open={this.state.drawer} setOpen={this.setDrawerOpen}/>
          }}
        </MediaQuery>
        <MediaQuery minWidth={500}>
          {matches => {
            return matches ?
              <EarthSection/>
              :
              <EarthSectionResponsive setOpen={this.setDrawerOpen}/>
          }}
        </MediaQuery>
      </main>
    );
  }
}
