import darkBaseTheme from "material-ui/styles/baseThemes/darkBaseTheme";

const palette = {
  ...darkBaseTheme.palette,
  primary1Color: '#0a0a0a',
  primary2Color: '#0a0a0a',
  canvasColor: 'rgba(10, 10, 10, .65)',
};

export default {
  ...darkBaseTheme,
  fontFamily: "'Raleway', sans-serif",
  palette: palette
}
