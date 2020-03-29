// import App from 'next/app'
import React from 'react';
import Head from 'next/head';
import {makeStyles, ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {useEffect} from 'react';
import theme from '../theme/Mui';
import './_app.css';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import Link from '../components/atoms/Link';

import BackgroundImg from './../assets/images/main-bg.jpg';

const useStyles = makeStyles(theme => ({
	root: {
		minHeight: '100vh',
		background: `white url(${BackgroundImg}) no-repeat bottom`,
		backgroundSize: 'cover',
		display: 'flex',
		flexGrow: 1
	},
	header: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	appBar: {
		backgroundColor: 'transparent',
		fontWeight: 'bold',
		zIndex: theme.zIndex.drawer + 1,
		boxShadow: 'none',
	},
	logo: {
		textDecoration: 'none'
	},
	logoSubtitle: {
		color: '#000',
		fontWeight: 'normal'
	},
	logoSubtitleHighlight: {
		color: '#006735',
		fontWeight: 'bold'
	},
	toolbar: {
		backgroundColor: 'rgba(255, 255, 255, 0.9)',
		color: '#006735',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar
	},
	content: {
		flexGrow: 1,
	},
	appname: {
		color: 'black',
		fontSize: '1.1em',
		margin: '0'
	},
	container: {
		marginTop: '3em'
	}
}));

const SmallBusinessHeroApp = ({Component, pageProps}) => {

	const classes = useStyles();

	useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector('#jss-server-side');
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
	});

	return <React.Fragment>
		<Head>
			<meta charSet='utf-8'/>
			<link rel='icon' type='image/png' href='/favicon_16x16.ico' sizes='16x16'/>
			<link rel='icon' type='image/png' href='/favicon_32x32.ico' sizes='32x32'/>
			<link rel='icon' type='image/png' href='/favicon_48x48.ico' sizes='48x48'/>
			<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'/>
			<link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons'/>
			<meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width'/>
		</Head>
		<ThemeProvider theme={theme}>
			{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}

			<div className={classes.root}>
				<AppBar
					color={'transparent'}
					position='fixed'
					className={classes.appBar}
				>
					<Toolbar className={classes.toolbar}>
						<Link href='/' className={classes.logo}>
							<div style={{display: 'flex', alignItems: 'center'}}>
								<img
									src='/assets/images/logo.png'
									style={{
										width: '64px',
										height: 'auto'
									}}
								/>
								<Typography variant='h6' className={classes.logoSubtitle}>
									small business{' '}
									<span className={classes.logoSubtitleHighlight}>
										hero
									</span>
								</Typography>
							</div>
							{/*  Placeholder text for logo*/}
						</Link>
						<FontAwesomeIcon icon={faShoppingCart} width='24'/>
					</Toolbar>
				</AppBar>
				<CssBaseline/>
				<main className={classes.content}>
					<div className={classes.toolbar}/>
					<Container className={classes.container}>
						<Component {...pageProps} />
					</Container>
				</main>
			</div>

		</ThemeProvider>
	</React.Fragment>
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default SmallBusinessHeroApp
