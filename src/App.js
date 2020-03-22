import React from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { theme } from "./Theme";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import About from "./sites/aboutus";
import Home from "./sites/home";
import Samples from "./sites/samples";
import StoreProfile from "./sites/StoreProfile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Collapse } from "@material-ui/core";

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
    borderTop: "3px solid #75cca2",
    backgroundColor: "white",
    fontWeight: "bold",
    zIndex: theme.zIndex.drawer + 1,
    boxShadow: "none",
    padding: "10px 0"
  },
  logo: {
    textDecoration: "none"
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
  }
}));

export default function App() {
  const classes = useStyles();
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <AppBar
            color={"transparent"}
            position="fixed"
            className={classes.appBar}
          >
            <Toolbar className={classes.toolbar}>
              <Container maxWidth="xs" className={classes.header}>
                <FontAwesomeIcon icon={faBars} />
                <Link to="/" className={classes.logo}>
                  {/*  Placeholder text for logo*/}
                  <Typography variant="h6">SIMPLY</Typography>
                </Link>
                <FontAwesomeIcon icon={faShoppingCart} />
              </Container>
            </Toolbar>
          </AppBar>
          <main
            className={classes.content}
            style={{ position: "relative", overflow: "hidden" }}
          >
            <div className={classes.toolbar} />
            <Container>
              {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
              <Switch>
                <Route path="/stores/:storeId" component={StoreProfile} />
                <Route path="/samples">
                  <Samples />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </Container>
          </main>
        </div>
      </ThemeProvider>
    </Router>
  );
}
