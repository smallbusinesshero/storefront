import {makeStyles, Theme} from "@material-ui/core/styles";

export default makeStyles((theme: Theme) => ({
	header: {
		position: 'relative',
	},
	headerBackground: {
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		height: '25em',
		margin: '0 -3em',
		clipPath: 'polygon(0 0, 100% 0%, 100% 85%, 0% 100%)'
	},
	telephoneButton: {
		position: 'absolute',
		left: '50%',
		bottom: 0,
		transform: 'translateX(-50%)',
		color: 'white'
	},
	readmore: {
		textDecoration: 'none'
	},
	title: {
		color: '#006735',
		marginTop: '1em',
		fontSize: '1.5em',
		marginBottom: '0',
		textAlign: 'center',
		fontWeight: 500,
		paddingTop: '1em'
	},
	subtitle: {
		fontSize: '1.3em',
		marginTop: '0',
		textAlign: 'center',
		fontWeight: 300,
		marginBottom: '0',
		color: '#53514f'
	},
	description: {
		marginTop: '1.3em',
		paddingBottom: '1em',
		lineHeight: '1.4',
		color: '#53514f'
	},
	goods: {
		display: 'flex',
		flexWrap: 'wrap'
	},
	goodsGood: {
		width: 'calc(50% - 1em)',
		position: 'relative',
		marginBottom: '3em',
		overflow: 'hidden',
		'&:nth-child(even)': {
			marginLeft: '1em'
		},
		'&:nth-child(odd)': {
			marginRight: '1em'
		}
	},
	goodsGoodImageWrapper: {
		borderRadius: '10px',
		overflow: 'hidden',
		position: 'relative'
	},
	goodsGoodImage: {
		width: '100%',
		minWidth: '100%',
		height: '15em',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		transition: 'all 0.6s',
		cursor: 'pointer',
		'&:hover': {
			transform: 'scale(1.05)'
		}
	},
	goodsGoodName: {
		color: '#006735 !important',
		fontWeight: 'bold',
		textAlign: 'left'
	},
	goodsGoodDescription: {
		textAlign: 'left'
	},
	goodsGoodPrice: {
		color: '#006735',
		textAlign: 'end',
		fontWeight: 'bold',
	},
	icons: {
		padding: '1em 0',
		fontSize: '2em',
		textAlign: 'center',
		'& a': {
			fontSize: '10px',
			color: '#006735',
			textDecoration: 'none',
			padding: '0 0.5em'
		}
	}
}));