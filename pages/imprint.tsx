import React from "react";
import { Typography, Container, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  content: {
    width: "100%",
    padding: "10px",
  },
}));

const DataPrivacy = (props) => {
  const classes = useStyles();

  return (
    <Container>
      <Grid container item xs={12}>
        <Paper className={classes.content}>
          <Typography variant="h1" display="block">
            Impressum
          </Typography>
          <br />
          <Typography variant="body1" display="block">
            <b>Small Business Hero</b>
            <p>
              Diese Seite/Webapplikation wird betrieben und herausgegeben von:
            </p>
            Small Business Hero GbR<br></br>
            Grünewaldstraße 75<br></br>
            70469 Stuttgart<br></br>
            +(49) 0711 184 29 271<br></br>
            <p>
              Kontakt:<br></br>
              <a
                href="mailto:info@smallbusinesshero.de"
                target="_blank"
                rel="noopener"
              >
                info@smallbusinesshero.de
              </a>
            </p>
          </Typography>
        </Paper>
      </Grid>
    </Container>
  );
};

DataPrivacy.propTypes = {};

export default DataPrivacy;
