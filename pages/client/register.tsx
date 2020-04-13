import React from "react";
import { Container, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { RegisterForm } from "../../components/organism/client/register.form";

const useStyles = makeStyles(() => ({
  content: {
    width: "100%",
    padding: "10px",
  },
}));

const ClientRegistration = (props) => {
  const classes = useStyles();

  return (
    <Container>
      <Grid container item xs={12}>
        <Paper className={classes.content}>
          <RegisterForm {...props} />
        </Paper>
      </Grid>
    </Container>
  );
};

ClientRegistration.propTypes = {};

export default ClientRegistration;
