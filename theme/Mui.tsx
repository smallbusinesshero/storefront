import { createMuiTheme } from "@material-ui/core/styles";

const baseTextColor = "#2a2a2a";

const bodyBase = {
  fontFamily: '"Montserrat", sans-serif',
  color: baseTextColor,
};

const headlineBase = {
  fontFamily: '"Merriweather", serif',
  color: baseTextColor,
};

const theme = createMuiTheme({
  palette: {
    common: {
      black: "#2a2a2a",
      white: "#EEE",
    },
    text: {
      primary: baseTextColor,
      secondary: "#2a2a2a",
    },
    primary: {
      main: "#2a2a2a",
    },
    action: {
      active: "rgba(0, 123, 61, 0.54)",
      hover: "rgba(0, 123, 61, 0.04)",
      hoverOpacity: 0.1,
      selected: "rgba(0, 123, 61, 0.08)",
      selectedOpacity: 0.1,
      disabled: "rgba(0, 123, 61, 0.26)",
      disabledBackground: "rgba(0, 123, 61, 0.12)",
      disabledOpacity: 0.1,
      focus: "rgba(0, 123, 61, 0.12)",
      focusOpacity: 0.1,
      activatedOpacity: 0.1,
    },
  },
  typography: {
    h1: {
      fontSize: 24,
      ...headlineBase,
    },
    h2: {
      fontSize: 20,
      ...headlineBase,
    },
    h3: {
      fontSize: 18,
      ...headlineBase,
    },
    h4: {
      fontSize: 14,
      ...headlineBase,
    },
    h5: {
      fontSize: 12,
      ...headlineBase,
    },
    h6: {
      fontSize: 10,
      ...headlineBase,
    },
    subtitle1: {
      ...headlineBase,
    },
    subtitle2: {
      ...headlineBase,
    },
    body1: {
      ...bodyBase,
    },
    body2: {
      ...bodyBase,
    },
    button: {
      ...bodyBase,
    },
    caption: {
      ...bodyBase,
    },
    overline: {
      ...bodyBase,
    },
  },
});

export default theme;
