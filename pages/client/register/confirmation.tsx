import React from "react";
import { Container, Grid, Typography, Button, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";

const useStyles = makeStyles(() => ({
  content: {
    width: "100%",
    padding: "10px",
  },
}));

const ClientRegistration = (props) => {
  const classes = useStyles();
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <Container>
      <Grid container item>
        <Grid item xs={12}>
          <Typography variant="h2" gutterBottom={true}>
            Vielen Dank für deinen Eintrag!
          </Typography>
          <Typography variant="body1" gutterBottom={true}>
            Gerade basteln wir für dich fleißig an einer einfachen Möglichkeit
            zum Login, damit du dein Profil nachträglich bearbeiten kannst. Wir
            bitten dich noch um etwas Geduld, bald sind wir soweit!
            <br />
            <br />
            Wenn du bis dahin eine Änderung vornehmen möchtest, schreib uns doch
            gerne eine Email via:&nbsp;
            <Link href="mailto:partner@smallbusinesshero.de">
              partner(at)smallbusinesshero.de
            </Link>
            <br />
            <br />
          </Typography>
          <Button
            variant="contained"
            color="primary"
            disableFocusRipple={true}
            disableRipple={true}
            onClick={handleClick}
          >
            Zurück zur Startseite
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

ClientRegistration.propTypes = {};

export default ClientRegistration;
