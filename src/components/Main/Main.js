import React, {Component} from "react";
import MediaQuery from "react-responsive";
import ListSection from "../ListSection/ListSection";
import ListSectionResponsive from "../ListSection/ListSectionResponsive";
import EarthSection from "../EarthSection/EarthSection";
import EarthSectionResponsive from "../EarthSection/EarthSectionResponsive";

const style = {
  height: 'calc(100% - 100px)',
  padding: 25,
  boxSizing: 'border-box',
  overflow: 'auto',
  color: '#fff'
};

export default class Main extends Component {

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
              <ListSection/>
              :
              <ListSectionResponsive open={this.state.drawer} setOpen={this.setDrawerOpen}/>
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
