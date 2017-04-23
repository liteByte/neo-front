import React, {Component} from "react";
import MediaQuery from "react-responsive";
import ListSection from "../ListSection/ListSection";
import ListSectionResponsive from "../ListSection/ListSectionResponsive";
import EarthSection from "../EarthSection/EarthSection";
import EarthSectionResponsive from "../EarthSection/EarthSectionResponsive";

const style = {
  height: '100%',
  boxSizing: 'border-box',
  overflow: 'auto',
  color: '#fff',
  background: "url('/assets/fondo_estrellas.svg') 50% 50% / cover",
};

export default class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      drawer: false,
      neo: null,
      detail: false,
    };
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
                neos={this.props.neos}
                detail={this.state.detail}
                neo={this.state.neo}
                selectNeo={this.selectNeo}
              />
              :
              <ListSectionResponsive
                neos={this.props.neos}
                open={this.state.drawer}
                setOpen={this.setDrawerOpen}
                selectNeo={this.selectNeo}
              />
          }}
        </MediaQuery>
        <MediaQuery minWidth={750}>
          {matches => {
            return matches ?
              <EarthSection
                neos={this.props.neos}
                selectNeo={this.selectNeo}
                setAboutOpen={this.props.setAboutOpen}
              />
              :
              <EarthSectionResponsive
                setOpen={this.setDrawerOpen}
                neos={this.props.neos}
                detail={this.state.detail}
                neo={this.state.neo}
                selectNeo={this.selectNeo}
                setAboutOpen={this.props.setAboutOpen}
              />
          }}
        </MediaQuery>
      </main>
    );
  }
}

Main.propTypes = {
  neos: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  setAboutOpen: React.PropTypes.func.isRequired,
};
