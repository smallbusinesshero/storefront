import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography, Link } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  teaserThatsUsOuterWrapper: {
    background: "#f5f7f6",
    width: "100%",
  },
  teaserThatsUsInnerWrapper: {
    textAlign: "center",
    paddingTop: 100,
    paddingBottom: 100,
  },
  teaserThatsUsIntro: {
    fontSize: 36,
    lineHeight: "1.3em",
    marginBottom: 25,
  },
  ourMission: {
    color: "#FFB100",
    fontWeight: "bold",
  },
}));

export default function ThatsUs() {
  const classes = useStyles();

  return (
    <div className={classes.teaserThatsUsOuterWrapper}>
      <Container maxWidth="md">
        <Grid container item>
          <Grid item xs={12}>
            <div className={classes.teaserThatsUsInnerWrapper}>
              <Typography
                variant="h2"
                variantMapping={{ h2: "h4" }}
                gutterBottom={true}
              >
                Das sind wir
              </Typography>
              <Typography
                variant="body2"
                className={classes.teaserThatsUsIntro}
              >
                <span className={classes.ourMission}> Unsere Mission:</span> die
                kleinen Geschäfte in der Nachbarschaft wieder mit ihren Kunden
                zu verbinden.
              </Typography>
              <Typography variant="body2">
                Small Business Hero ist eines der Top 20 Projekte, die während
                des #WirVsVirus -Hackathons entstanden sind. Dieser Hackathon
                war Stand heute der größte Hackathon der Welt und wurde außerdem
                von der Deutschen Bundesregierung gefördert.
              </Typography>
              <Typography variant="body2">
                <Link href="https://google.de">#WirVsVirus</Link>{" "}
                <Link href="https://google.de">
                  Hackathon der Bundesregierung
                </Link>
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
