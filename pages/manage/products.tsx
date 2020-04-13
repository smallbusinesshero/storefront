import React from "react";
import { Container, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  content: {
    width: "100%",
    padding: "10px",
  },
}));

const ManageStoreProducts = () => {
  const classes = useStyles();

  return (
    <Container>
      <Grid container item xs={12}>
        <Paper className={classes.content}>Manage Store Products</Paper>
      </Grid>
    </Container>
  );
};

ManageStoreProducts.propTypes = {};

export default ManageStoreProducts;
