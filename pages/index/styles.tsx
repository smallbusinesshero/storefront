import {makeStyles, Theme} from '@material-ui/core/styles';

export default makeStyles((theme: Theme) => ({
	root: {
		padding: '2px 4px',
		display: 'flex',
		alignItems: 'center',
	},
	input: {
		marginLeft: theme.spacing(1),
		flex: 1
	},
	iconButton: {
		padding: 10
	},
	wrapper: {
	},
	searchPanel: {
		backgroundColor: 'rgba(255, 255, 255, 0.9)',
		padding: '2rem'
	},
	bg: {
		backgroundColor: '#d8f0ed'
	},
	intro: {
		color: '#006735',
		fontSize: '1.1rem',
		fontWeight: 'normal',
		margin: '0 0 1.8em'
	},
	searchWrapper: {
		position: 'relative',
		width: '100%',
		zIndex: 10
	},
	search: {
		width: '100%',
		padding: '1em 0.5em 1em 3em',
		border: '1px solid #eee',
		fontSize: '1rem',
		outline: 'none'
	},
	searchMarker: {
		position: 'absolute',
		left: '0.7em',
		top: '50%',
		transform: 'translateY(-50%)',
		fontSize: '20px'
	},
	form: {
		display: 'flex',
		alignItems: 'center',
		width: '100%',
		flexDirection: 'column'
	},
	searchLabel: {
		position: 'absolute',
		display: 'block',
		padding: '0 0.5em',
		top: '-0.8em',
		left: '0.5em',
		backgroundColor: 'white',
		color: '#006735',
		fontSize: '12px',
	},
	btnPrimary: {
		color: '#006735',
		fontSize: '0.9rem',
		letterSpacing: '0.1rem',
		backgroundColor: 'transparent',
		padding: '0.8em 1em',
		alignSelf: 'center',
		display: 'inline-block',
		marginTop: '2em',
		border: '2px solid currentColor',
		width: '100%',
		cursor: 'pointer'
	},
	selectionList: {
		backgroundColor: 'white',
		border: '1px solid #eee',
		padding: 0,
		marginTop: '-1px',
		position: 'absolute',
		left: 0,
		top: '100%',
		listStyleType: 'none',
		width: '100%',
		boxShadow: '0 6px 7px 0px rgba(0, 0, 0, 0.1)'
	},
	selectionListItem: {
		padding: '0.5em 0.8em',
		'-webkit-appearance': 'none'
	}
}));