import React from 'react';
import { makeStyles, useTheme, ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import HomeIcon from '@material-ui/icons/Home';
import Container from '@material-ui/core/Container';
import { theme } from './Theme';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import About from './sites/aboutus';
import Home from './sites/home';
import Samples from './sites/samples';
import StoreProfile from "./sites/StoreProfile";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    background: 'white'
  },
  appBar: {
    borderTop: '3px solid #444',
    backgroundColor: 'white',
    fontWeight: 'bold',
    zIndex: theme.zIndex.drawer + 1,
    boxShadow: 'none',
    padding: '10px 0',
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    backgroundColor: 'white',
    flexGrow: 1,
    padding: theme.spacing(3),
    paddingTop: '40px'
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <Router>
      <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar
          color={'transparent'}
          position="fixed"
          className={classes.appBar}
        >
          <Toolbar>
            <Container maxWidth={'xs'}>
              <Typography variant="h5" noWrap align='center' gutterBottom={true}>
                small business <br /><strong><i>hero</i></strong>
              </Typography>
            </Container>
          </Toolbar>
        </AppBar>
        <main className={classes.content}>
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

          <Container>
            <br /><br /><br /><br />
            <h5>Temporary Navigation</h5>
            <List>
              <Link to="/">
                <ListItem button>
                  <ListItemIcon><HomeIcon /></ListItemIcon>
                  <ListItemText>Home</ListItemText>
                </ListItem>
              </Link>
              <Link to="/about">
                <ListItem button>
                  <ListItemIcon><InboxIcon /></ListItemIcon>
                  <ListItemText>About</ListItemText>
                </ListItem>
              </Link>
              <Link to="/samples">
                <ListItem button>
                  <ListItemIcon><InboxIcon /></ListItemIcon>
                  <ListItemText>Samples</ListItemText>
                </ListItem>
              </Link>
            </List>
          </Container>

        </main>
      </div>
      </ThemeProvider>
    </Router>
  );
}
