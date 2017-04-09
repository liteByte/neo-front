import injectTapEventPlugin from "react-tap-event-plugin";
import React, {Component} from "react";
import MediaQuery from "react-responsive";
import theme from "./components/theme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
        <div style={{height: "100vh", minWidth: 300}}>
          <Header/>
          <Main/>
          <MediaQuery component={Footer} minWidth={500}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
