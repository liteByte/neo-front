import injectTapEventPlugin from "react-tap-event-plugin";
import React, {Component} from "react";
import MediaQuery from "react-responsive";
import LinearProgress from "material-ui/LinearProgress";
import {Set} from "immutable";
import theme from "./components/theme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import NeoServices from "./services/NeoService";
import Disclaimer from "./components/Disclaimer";
import AboutUs from "./components/AboutUs/AboutUs";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

injectTapEventPlugin();

window.firstLoad = true;

const progressStyle = {
  position: 'absolute',
  top: 46,
  background: '#0a0a0a',
  zIndex: 1401,
};

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      neos: [],
      date: new Date(),
      aboutUs: false,
      loading: Set(),
    };

    this.getNeos(this.state.date);
  }

  handleDate = (e, date) => {
    if (date.toISOString().substr(0, 10) !== this.state.date.toISOString().substr(0, 10)) {
      this.setState({date});
      this.getNeos(date);
    }
  };

  getNeos(date) {
    if (!window.firstLoad)
      this.setState({
        loading: this.state.loading.add(date.toISOString().substr(0, 10))
      });
    NeoServices.getNeos(date)
      .then(neos => {
        this.setState({
          neos: neos,
          loading: this.state.loading.remove(date.toISOString().substr(0, 10)),
        });
      })
      .catch(err => console.log(err));
  }

  handleAbout = (open) => {
    this.setState({
      aboutUs: open
    });
  };

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
        <div style={{height: "100vh", minWidth: 300}}>
          <AboutUs open={this.state.aboutUs} setOpen={this.handleAbout}/>
          { this.state.loading.size > 0 ? <LinearProgress style={progressStyle} color="#122b3a"/> : null}
          <Header date={this.state.date} handleDate={this.handleDate} handleAbout={this.handleAbout}/>
          <Main neos={this.state.neos} handleAbout={this.handleAbout}/>
          <MediaQuery component={Footer} minWidth={500} minHeight={400}/>
          <Disclaimer/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
