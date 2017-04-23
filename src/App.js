import injectTapEventPlugin from "react-tap-event-plugin";
import React, {Component} from "react";
import MediaQuery from "react-responsive";
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

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      neos: [],
      date: new Date(),
      aboutUs: false,
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
    NeoServices.getNeos(date)
      .then(neos => {
        this.setState({neos});
      })
      .catch(err => console.log(err));
  }

  setAboutOpen = (open) => {
    this.setState({
      aboutUs: open
    });
  };

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
        <div style={{height: "100vh", minWidth: 300}}>
          <AboutUs open={this.state.aboutUs} setOpen={this.setAboutOpen}/>
          <Header date={this.state.date} handleDate={this.handleDate} setAboutOpen={this.setAboutOpen}/>
          <Main neos={this.state.neos} setAboutOpen={this.setAboutOpen}/>
          <MediaQuery component={Footer} minWidth={500} minHeight={400}/>
          <Disclaimer/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
