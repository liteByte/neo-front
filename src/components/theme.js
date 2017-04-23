import darkBaseTheme from "material-ui/styles/baseThemes/darkBaseTheme";

const palette = {
  ...darkBaseTheme.palette,
  primary1Color: '#fff',
  primary2Color: '#122b3a',
  canvasColor: 'rgba(35, 35, 35, .65)',
  textColor: '#fff',
  alternateTextColor: '#fff',
};

export default {
  ...darkBaseTheme,
  fontFamily: "'Raleway', sans-serif",
  palette: palette
}
