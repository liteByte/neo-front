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
      id: '1',
      name: '434734 (2006 FX)',
      size: {
        min: 36.6906137531,
        max: 82.0427064882,
      },
      approach: {
        velocity: 50505.109238,
        missDistance: 36433752.8768123,
      },
      isDangerous: false,
    },
    {
      color: 0,
      terrain: 5,
      id: '1',
      name: '434734 (2006 FX)',
      size: {
        min: 58.1507039646,
        max: 130.0289270043,
      },
      approach: {
        velocity: 50505.109238,
        missDistance: 36433752.8768123,
      },
      isDangerous: false,
    },
    {
      color: 1,
      terrain: 1,
      id: '1',
      name: '434734 (2006 FX)',
      size: {
        min: 231.5021222103,
        max: 517.6544821978,
      },
      approach: {
        velocity: 50505.109238,
        missDistance: 36433752.8768123,
      },
      isDangerous: false,
    },
    {
      color: 3,
      terrain: 1,
      id: '1',
      name: '434734 (2006 FX)',
      size: {
        min: 384.1978910643,
        max: 859.0926012318,
      },
      approach: {
        velocity: 50505.109238,
        missDistance: 36433752.8768123,
      },
      isDangerous: true,
    },
    {
      color: 0,
      terrain: 0,
      id: '1',
      name: '434734 (2006 FX)',
      size: {
        min: 167.7084621628,
        max: 375.0075217981,
      },
      approach: {
        velocity: 50505.109238,
        missDistance: 36433752.8768123,
      },
      isDangerous: true,
    },
    {
      color: 3,
      terrain: 2,
      id: '1',
      name: '434734 (2006 FX)',
      size: {
        min: 13.3215566698,
        max: 29.7879062798,
      },
      approach: {
        velocity: 50505.109238,
        missDistance: 36433752.8768123,
      },
      isDangerous: false,
    },
    {
      color: 1,
      terrain: 4,
      id: '1',
      name: '434734 (2006 FX)',
      size: {
        min: 69.9125232246,
        max: 156.3291544087,
      },
      approach: {
        velocity: 50505.109238,
        missDistance: 36433752.8768123,
      },
      isDangerous: false,
    }
  ];

  constructor(props) {
    super(props);

    this.state = {
      drawer: false,
    };

    const neos = this.neos;
    let biggest = 0;
    let smallest = 0;
    for (let i = 0; i < neos.length; i++) {
      const neo = neos[i];
      const size = (neo.size.min + neo.size.max) / 2;
      if (size > biggest) biggest = size;
      if (size < smallest || i === 0) smallest = size;
      neo.size.avg = size;
    }

    const minDisplaySize = .1;
    for (let i = 0; i < neos.length; i++) {
      const neo = neos[i];
      let size = biggest > 0 ? neo.size.avg / biggest : 1;
      if (size < minDisplaySize) size = minDisplaySize;
      neo.display = {
        size: size
      };
    }

    this.neos = this.neos.sort((a, b) => {
      if (a.size.avg === b.size.avg) return 0;
      return a.size.avg > b.size.avg ? -1 : 1;
    });
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
