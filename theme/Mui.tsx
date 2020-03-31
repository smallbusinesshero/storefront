import { createMuiTheme } from '@material-ui/core/styles';

const baseTextColor = '#111';

const theme = createMuiTheme({
	palette: {
		common: {
			black: '#111',
			white: '#EEE'
		},
		text: {
			primary: baseTextColor,
			secondary: '#111'
		},
		primary: {
			main: '#007a3d',
			light: '#00944a',
			dark: '#004e27'
		},
		action: {
			active: 'rgba(0, 123, 61, 0.54)',
			hover: 'rgba(0, 123, 61, 0.04)',
			hoverOpacity: 0.1,
			selected: 'rgba(0, 123, 61, 0.08)',
			selectedOpacity: 0.1,
			disabled: 'rgba(0, 123, 61, 0.26)',
			disabledBackground: 'rgba(0, 123, 61, 0.12)',
			disabledOpacity: 0.1,
			focus: 'rgba(0, 123, 61, 0.12)',
			focusOpacity: 0.1,
			activatedOpacity: 0.1,
		}
	},
	overrides: {
		MuiButton: {
			// Name of the component ⚛️ / style sheet
			text: {
				// Name of the rule
				color: 'white', // Some CSS
				background: '#00944a'
			},
			root: {
				"&:hover": {
					backgroundColor: '#007a3d',
				}
			}
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
		}
	}
});

export default theme;