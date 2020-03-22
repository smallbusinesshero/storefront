import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import EmblaCarouselReact from "embla-carousel-react";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: "10px",
    maxWidth: 400
  },
  media: {
    height: 200
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  },
  storeImg: {
    maxWidth: "200px",
    maxHeight: "200px"
  }
}));

export default function CardCarousel(props) {
  const { storeData } = props;
  const classes = useStyles();
  const [embla, setEmbla] = useState(null);

  useEffect(() => {
    if (embla) {
      embla.on("select", () => {});
    }
  }, [embla]);

  return (
    <>
      <EmblaCarouselReact emblaRef={setEmbla} options={{ loop: false }}>
        <div style={{ display: "flex" }}>
          {storeData.map(store => (
            <div style={{ flex: "0 0 100%" }}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={store.profileImageURL}
                    title={`${store.name["de_DE"]}-profile`}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {store.name["de_DE"]}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      style={{ maxHeight: "100px", overflow: "hidden" }}
                    >
                      {store.description["de_DE"]}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Link to={`/stores/${store.id}`}>
                    <Button size="small" color="primary">
                      Go To Store
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </div>
          ))}
        </div>
      </EmblaCarouselReact>
      <IconButton onClick={() => embla.scrollPrev()}>Prev</IconButton>
      <IconButton onClick={() => embla.scrollNext()}>Next</IconButton>
    </>
  );
}
