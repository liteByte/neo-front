import injectTapEventPlugin from "react-tap-event-plugin";
import React, {Component} from "react";
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
        <div>
          <Header/>
          <Main/>
          <Footer/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
