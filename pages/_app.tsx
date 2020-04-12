declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName: string]: any;
    }
  }
}

import React from "react";
import Head from "next/head";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useEffect, useState } from "react";
import theme from "../theme/Mui";
import "./_app.css";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import Link from "../components/atoms/Link";
import Box from "@material-ui/core/Box";
import { initializeAnalytics } from "../services/analytics";

import styled, { keyframes } from "styled-components";

import { CustomButtonHighlight } from "../components/atoms/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    flexGrow: 1,
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  appBar: {
    backgroundColor: "transparent",
    zIndex: theme.zIndex.drawer + 1,
    boxShadow: "none",
  },
  logo: {
    textDecoration: "none",
  },
  logoSubtitle: {
    color: "#2a2a2a",
    fontWeight: "bold",
  },
  logoSubtitleHighlight: {
    color: "#2a2a2a",
    fontWeight: "lighter",
  },
  register: {
    height: "64px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8em",
    },
  },
  toolbar: {
    backgroundColor: "rgba(255, 255, 255, 1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
  },
  appname: {
    color: "black",
    fontSize: "1.1em",
    margin: "0",
  },
  container: {
    marginTop: "3em",
  },
  wevsvirus: {
    lineHeight: "64px",
    paddingLeft: "10px",
    fontWeight: "bold",
    textDecoration: "none",
    color: theme.palette.common.black,

    "&:hover": {
      color: theme.palette.common.black,
      textDecoration: "none",
    },

    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8em",
    },
  },
  wevsvirusHeart: {
    color: "red",
  },
}));

const AnimatedLogoKeyframes = keyframes`
	0% {
		letter-spacing: -0.5em;
		filter: blur(12px);
		opacity: 0;
	}
	100% {
		filter: blur(0px);
		opacity: 1;
	}
`;

initializeAnalytics();

const AnimatedLogo = styled.div`
  animation: ${AnimatedLogoKeyframes} 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
`;

const SmallBusinessHeroApp = ({ Component, pageProps }) => {
  const classes = useStyles();
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  });

  useEffect(() => {
    setStartAnimation(true);
  });

  return (
    <React.Fragment>
      <Head>
        <meta charSet="utf-8" />
        <link
          rel="icon"
          type="image/png"
          href="/favicon_16x16.ico"
          sizes="16x16"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon_32x32.ico"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon_48x48.ico"
          sizes="48x48"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}

        <div className={classes.root}>
          <AppBar
            color={"transparent"}
            position="fixed"
            className={classes.appBar}
          >
            <Toolbar className={classes.toolbar} disableGutters={true}>
              <a
                href="https://www.youtube.com/watch?v=umg0Hjc02SM"
                target="_blank"
                rel="noopener"
                className={classes.wevsvirus}
              >
                #WeVsVirus <span className={classes.wevsvirusHeart}>❤</span>
              </a>
              <Link href="/" className={classes.logo}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  {Boolean(startAnimation) == true && (
                    <AnimatedLogo>
                      <span className={classes.logoSubtitle}>
                        SBH.{" "}
                        <Box
                          component="span"
                          display={{ xs: "none", sm: "inline" }}
                          className={classes.logoSubtitleHighlight}
                        >
                          small business hero
                        </Box>
                      </span>
                    </AnimatedLogo>
                  )}
                </div>
                {/*  Placeholder text for logo*/}
              </Link>
              <CustomButtonHighlight
                onClick={() => {
                  window.open(
                    "https://docs.google.com/forms/d/1qVNaUAvrFfpXZvRB3ZKv-1RelD6GTnbejSulJMfqUwg/viewform?edit_requested=true",
                    "_blank"
                  );
                }}
                className={classes.register}
              >
                Registrieren
              </CustomButtonHighlight>
            </Toolbar>
          </AppBar>
          <CssBaseline />
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Container className={classes.container}>
              <Component {...pageProps} />
            </Container>
          </main>
        </div>
      </ThemeProvider>
    </React.Fragment>
  );
};

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

export default SmallBusinessHeroApp;
