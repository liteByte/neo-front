import React, {Component} from "react";
import Measure from "react-measure";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {AutoRotatingCarousel, Slide} from "material-auto-rotating-carousel";
import {blue400, blue600, red400, red600} from "material-ui/styles/colors";

export default class Intro extends Component {

  constructor(props) {
    super(props);

    this.state = {
      open: true,
    }
  }

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  isMobile = (dimensions) => {
    return dimensions.width < 750 || dimensions.height < 750;
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
              interval={60000}
              mobile={this.isMobile(dimensions)}
              landscape={this.isLandscape(dimensions)}
              label="Get started"
              open={this.state.open}
              onRequestClose={this.handleClose}
              onStart={this.handleClose}
            >
              <Slide
                media={<img src="http://www.icons101.com/icon_png/size_256/id_79394/youtube.png"/>}
                mediaBackgroundStyle={{backgroundColor: red400}}
                contentStyle={{backgroundColor: red600}}
                title="Welcome to NEO"
                subtitle={<span>NEOs are small Solar System bodies whose orbit brings them close to the Earth.</span>}
              />
              <Slide
                media={<img src="http://www.icons101.com/icon_png/size_256/id_80975/GoogleInbox.png"/>}
                mediaBackgroundStyle={{backgroundColor: blue400}}
                contentStyle={{backgroundColor: blue600}}
                title={<span/>}
                subtitle={<span><p>Some cause mass extinctions, others grant wishes.</p><p>Meet our long travelled companions.</p></span>}
              />
            </AutoRotatingCarousel>
          }
        </Measure>
      </MuiThemeProvider>
    );
  }
}

Intro.propTypes = {};
