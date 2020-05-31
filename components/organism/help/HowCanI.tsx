import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  teaserHowCanIOuterWrapper: {},
  teaserHowCanIInnerWrapper: {
    textAlign: "center",
    paddingTop: 132,
    paddingBottom: 132,
  },
}));

export default function HowCanI() {
  const classes = useStyles();

  return (
    <Container
      maxWidth="xl"
      disableGutters={true}
      className={classes.teaserHowCanIOuterWrapper}
    >
      <Container maxWidth="md">
        <div className={classes.teaserHowCanIInnerWrapper}>
          <Grid container item>
            <Grid item xs={12}>
              <div>
                <Typography variant="h1" variantMapping={{ h1: "h4" }}>
                  Wie kann ich ...
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </Container>
  );
}
