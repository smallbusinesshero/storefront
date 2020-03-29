// import App from 'next/app'
import React from 'react';
import Head from 'next/head';
import {makeStyles, ThemeProvider} from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import {useEffect} from "react";
import theme from "../theme/Mui";
import './_app.css';

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import Link from "../components/atoms/Link";

const useStyles = makeStyles(theme => ({
	root: {
		display: "flex",
		background: "white"
	},
	header: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center"
	},
	appBar: {
		borderTop: `3px solid #006735`,
		backgroundColor: "white",
		fontWeight: "bold",
		zIndex: theme.zIndex.drawer + 1,
		boxShadow: "none",
		padding: "10px 0"
	},
	logo: {
		textDecoration: "none"
	},
	logoSubtitle: {
		color: "#888",
		fontWeight: "normal"
	},
	logoSubtitleHighlight: {
		color: "#006735",
		fontWeight: 'bold'
	},
	toolbar: {
		display: "flex",
		alignItems: "center",
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar
	},
	content: {
		backgroundColor: "white",
		flexGrow: 1
	},
	appname: {
		color: "black",
		fontSize: "1.1em",
		margin: "0"
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
			<meta charSet="utf-8"/>
			<link rel="icon" type="image/png" href="/favicon_16x16.ico" sizes="16x16"/>
			<link rel="icon" type="image/png" href="/favicon_32x32.ico" sizes="32x32"/>
			<link rel="icon" type="image/png" href="/favicon_48x48.ico" sizes="48x48"/>
			<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
			<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
			<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
		</Head>
		<ThemeProvider theme={theme}>
			{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
			<CssBaseline/>
			<div className={classes.root}>
				<AppBar
					color={"transparent"}
					position="fixed"
					className={classes.appBar}
				>
					<Toolbar className={classes.toolbar}>
						<Container maxWidth="xs" className={classes.header}>
							<FontAwesomeIcon icon={faBars}/>
							<Link href="/" className={classes.logo}>
								<div style={{display: "flex", alignItems: "center"}}>
									<img
										src="/assets/images/logo.png"
										style={{
											width: "64px",
											height: "auto"
										}}
									/>
									<Typography variant="h6" className={classes.logoSubtitle}>
										small business{" "}
										<span className={classes.logoSubtitleHighlight}>
                        hero
                      </span>
									</Typography>
								</div>
								{/*  Placeholder text for logo*/}
							</Link>
							<FontAwesomeIcon icon={faShoppingCart}/>
						</Container>
					</Toolbar>
				</AppBar>
				<main
					className={classes.content}
					style={{position: "relative", overflow: "hidden"}}
				>
					<div className={classes.toolbar}/>
					<Container>
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
