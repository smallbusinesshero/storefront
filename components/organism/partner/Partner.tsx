import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  teaserHowPartnerOuterWrapper: {},
  teaserPartnerInnerWrapper: {
    textAlign: "center",
    paddingTop: 86,
    paddingBottom: 86,
  },
}));

export default function Partner() {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <div className={classes.teaserPartnerInnerWrapper}>
        <Grid container item>
          <Grid item xs={12}>
            <div>
              <Typography variant="h1" variantMapping={{ h1: "h4" }}>
                Partner
              </Typography>
            </div>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
