import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Link from "../atoms/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "25px",
  },
  wrapper: {
    height: 400,
    borderRadius: 5,
    overflow: "hidden",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "relative",
  },
  info: {
    position: "absolute",
    top: 50,
    right: 0,
    backgroundColor: "#FFF",
    padding: 10,
    width: "80%",
    wordBreak: "break-word",
  },
}));

export default function CardCarousel(props) {
  const { storeData } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {storeData.map((store, index) => (
          <Grid item xs={12} sm={6} md={4}>
            <Link
              key={index}
              href={`/stores/${store.id}`}
              style={{ textDecoration: "none" }}
            >
              <div
                className={classes.wrapper}
                style={{ backgroundImage: `url(${store.profileImageURL})` }}
              >
                <div className={classes.info}>
                  <Typography gutterBottom variant="h3">
                    {store.name["de_DE"]}
                  </Typography>

                  <Typography gutterBottom variant="body2">
                    {store.address.streetName} {store.address.streetNumber},{" "}
                    {store.address.zipCode} {store.address.city}
                  </Typography>
                </div>
              </div>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
