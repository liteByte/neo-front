import React, {Component} from "react";
import Measure from "react-measure";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {AutoRotatingCarousel, Slide} from "material-auto-rotating-carousel";

const imgStyle = {
  maxHeight: '100%',
  maxWidth: '100%',
};

export default class Intro extends Component {

  constructor(props) {
    super(props);

    this.state = {
      open: !sessionStorage.getItem("intro"),
    };

    sessionStorage.setItem("intro", true);
  }

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  isMobile = (dimensions) => {
    return dimensions.width < 750 || dimensions.height < 500;
  };

  isLandscape = (dimensions) => {
    return dimensions.width / dimensions.height > 4 / 3;
  };

  render() {
    return (
      <MuiThemeProvider>
        <Measure>
          { dimensions =>
            <AutoRotatingCarousel
              autoplay={true}
              interval={120000}
              mobile={this.isMobile(dimensions)}
              landscape={this.isLandscape(dimensions)}
              label="Get started"
              open={this.state.open}
              onRequestClose={this.handleClose}
              onStart={this.handleClose}
            >
              <Slide
                media={<img src="/assets/tierra_sinnubes.svg" style={imgStyle} alt="Earth"/>}
                mediaBackgroundStyle={{backgroundColor: "#122b3a"}}
                contentStyle={{backgroundColor: "#17415a"}}
                title="What are NEOs?"
                subtitle="NEOs are small Solar System bodies whose orbit brings them close to the Earth."
              />
              <Slide
                media={<img src="/assets/neo_example_1.svg" style={imgStyle} alt="NEO"/>}
                mediaBackgroundStyle={{backgroundColor: "#122b3a"}}
                contentStyle={{backgroundColor: "#17415a"}}
                title=""
                subtitle="Some cause mass extinctions, others grant wishes."
              />
              <Slide
                media={<img src="/assets/neo_example_2.svg" style={imgStyle} alt="NEO"/>}
                mediaBackgroundStyle={{backgroundColor: "#122b3a"}}
                contentStyle={{backgroundColor: "#17415a"}}
                title=""
                subtitle="Every day, many come really close, and you can see them all here."
              />
            </AutoRotatingCarousel>
          }
        </Measure>
      </MuiThemeProvider>
    );
  }
}

Intro.propTypes = {};
