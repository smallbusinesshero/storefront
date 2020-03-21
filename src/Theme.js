import { createMuiTheme } from '@material-ui/core/styles';

const baseTextColor = '#444';

const theme = createMuiTheme({
    palette: {
        text: {
            primary: baseTextColor
        }
    },
    typography: {
        h1: {
            color: baseTextColor
        },
        h2: {
            color: baseTextColor
        },
        h3: {
            color: baseTextColor
        },
        h4: {
            color: baseTextColor
        },
        h5: {
            color: baseTextColor
        },
        h6: {
            color: baseTextColor
        },
        subtitle1: {
            color: baseTextColor
        },
        subtitle2: {
            color: baseTextColor
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