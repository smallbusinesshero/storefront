import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

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
      black: "#2B2B2B",
      white: "#EEE",
    },
    text: {
      primary: baseTextColor,
      secondary: "#2B2B2B",
    },
    primary: {
      main: "#2B2B2B",
    },
    secondary: {
      main: "#19ae9d",
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
      fontSize: 60,
      ...headlineBase,
    },
    h2: {
      fontSize: 48,
      ...headlineBase,
    },
    h3: {
      fontSize: 36,
      ...headlineBase,
    },
    h4: {
      fontSize: 24,
      ...headlineBase,
    },
    h5: {
      fontSize: 18,
      ...headlineBase,
    },
    h6: {
      fontSize: 16,
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
      fontSize: 24,
    },
    body2: {
      ...bodyBase,
      fontSize: 16,
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
  overrides: {
    MuiInputBase: {
      input: {
        "&:-webkit-autofill": {
          transitionDelay: "9999s",
          transitionProperty: "background-color, color",
        },
        marginTop: 3,
        fontSize: 16,
      },
    },
    MuiInputLabel: {
      root: {
        fontSize: 14,
      },
    },
    MuiFormControlLabel: {
      label: {
        fontSize: 14,
      },
    },
    MuiFormLabel: {
      asterisk: {
        color: "red",
      },
    },
    MuiSelect: {
      root: {
        fontSize: 14,
      },
      select: {
        fontSize: 14,
      },
      selectMenu: {
        fontSize: 14,
      },
    },
    MuiMenuItem: {
      root: {
        fontSize: 14,
      },
    },
    MuiLink: {
      root: {
        color: "#19ae9d",
        fontWeight: 600,
        "&:hover": {
          color: "#006174",
          cursor: "pointer",
        },
      },
    },
  },
});

export default theme;
