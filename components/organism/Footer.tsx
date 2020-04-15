import React from "react";
import { Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Link from "../atoms/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    height: "50px",
    background: "white",
  },
  content: {
    lineHeight: "50px",
    textAlign: "right",
  },
}));

export default function CardCarousel(props) {
  const {} = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.content}>
        <Link href="/data-privacy">Datenschutz</Link> -{" "}
        <Link href="/imprint">Impressum</Link>
      </Container>
    </div>
  );
}
