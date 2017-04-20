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
  color: '#fff',
  background: "url('/assets/fondo_estrellas.svg') 50% 50% / cover",
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
        velocity: 40505.109238,
        missDistance: 4024547.75,
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
        missDistance: 11896187,
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
        missDistance: 45290628,
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
        missDistance: 51762692,
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
        missDistance: 38764432,
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
        missDistance: 73463952,
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
        missDistance: 8084571,
      },
      isDangerous: false,
    }
  ];

  constructor(props) {
    super(props);

    this.state = {
      drawer: false,
      neo: null,
      detail: false,
    };

    const neos = this.neos;
    let biggest = 0;
    let farthest = 0;
    for (let i = 0; i < neos.length; i++) {
      const neo = neos[i];

      const size = (neo.size.min + neo.size.max) / 2;
      if (size > biggest) biggest = size;
      neo.size.avg = size;

      const missDistance = neo.approach.missDistance;
      if (missDistance > farthest) farthest = missDistance;
    }

    const minDisplaySize = .1;
    const minDisplayDistance = .3;
    for (let i = 0; i < neos.length; i++) {
      const neo = neos[i];

      let size = biggest > 0 ? neo.size.avg / biggest : 1;
      if (size < minDisplaySize) size = minDisplaySize;

      let distance = farthest > 0 ? neo.approach.missDistance / farthest : 1;
      if (distance < minDisplayDistance) distance = minDisplayDistance;

      neo.display = {
        size: size,
        distance: distance,
        angle: Math.random() * 360,
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

  selectNeo = (neo) => {
    const state = {
      detail: !!neo,
      neo: neo,
      drawer: false,
    };
    this.setState(state);
  };

  render() {
    return (
      <main style={style}>
        <MediaQuery minWidth={750}>
          {matches => {
            return matches ?
              <ListSection
                neos={this.neos}
                detail={this.state.detail}
                neo={this.state.neo}
                selectNeo={this.selectNeo}
              />
              :
              <ListSectionResponsive
                neos={this.neos}
                open={this.state.drawer}
                setOpen={this.setDrawerOpen}
                selectNeo={this.selectNeo}
              />
          }}
        </MediaQuery>
        <MediaQuery minWidth={750}>
          {matches => {
            return matches ?
              <EarthSection neos={this.neos}/>
              :
              <EarthSectionResponsive
                setOpen={this.setDrawerOpen}
                neos={this.neos}
                detail={this.state.detail}
                neo={this.state.neo}
                selectNeo={this.selectNeo}
              />
          }}
        </MediaQuery>
      </main>
    );
  }
}
