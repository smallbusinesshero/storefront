import { createMuiTheme } from '@material-ui/core/styles';

const baseTextColor = '#666666';
const baseHeadlineColor = '#5f5f5f';

const theme = createMuiTheme({
    palette: {
        text: {
            primary: baseTextColor
        },
        primary: {
            main: '#006735',
            light: '#006735',
            dark: '#006735',
        }
    },
    overrides: {
        MuiButton: { 
            text: { // Name of the rule
                color: 'white', // Some CSS
                background: '#75cca2',
            },
        },
    },
    typography: {
        h1: {
            color: baseHeadlineColor
        },
        h2: {
            color: baseHeadlineColor
        },
        h3: {
            color: baseHeadlineColor
        },
        h4: {
            color: baseHeadlineColor
        },
        h5: {
            color: baseHeadlineColor
        },
        h6: {
            color: baseHeadlineColor
        },
        subtitle1: {
            color: baseHeadlineColor
        },
        subtitle2: {
            color: baseHeadlineColor
        },
        body1: {
            color: baseTextColor
        },
        body2: {
            color: baseTextColor
        },
        button: {
            color: baseTextColor
        },
        caption: {
            color: baseTextColor
        },
        overline: {
            color: baseTextColor
        },
    }
});

export { theme };