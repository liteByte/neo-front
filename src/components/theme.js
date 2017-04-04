import darkBaseTheme from "material-ui/styles/baseThemes/darkBaseTheme";
import {grey900} from "material-ui/styles/colors";

const palette = {
  ...darkBaseTheme.palette,
  primary1Color: grey900,
  primary2Color: grey900,
};

export default {
  ...darkBaseTheme,
  fontFamily: "'Raleway', sans-serif",
  palette: palette
}
