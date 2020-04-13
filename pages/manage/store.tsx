import React from "react";
import { Container, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  content: {
    width: "100%",
    padding: "10px",
  },
}));

const ManageStore = () => {
  const classes = useStyles();

  return (
    <Container>
      <Grid container item xs={12}>
        <Paper className={classes.content}>Manage Store Meta Data</Paper>
      </Grid>
    </Container>
  );
};

ManageStore.propTypes = {};

export default ManageStore;
