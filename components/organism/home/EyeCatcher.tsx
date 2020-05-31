import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Container, Grid, Typography, Link } from "@material-ui/core";
import SearchWidget from "../search/widget/Widget";

const useStyles = makeStyles((theme: Theme) => ({
  iconButton: {
    padding: 10,
  },
  searchPanel: {
    padding: "2rem",
  },
  eyeCatcherOuterWrapper: {
    backgroundImage: `url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgd2lkdGg9IjIwNTRweCIgaGVpZ2h0PSIxMDY1cHgiIHZpZXdCb3g9IjAgMCAyMDU0IDEwNjUiIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQogIDxkZXNjPkNyZWF0ZWQgd2l0aCBMdW5hY3k8L2Rlc2M+DQogIDxnIGlkPSJHcm91cCI+DQogICAgPHBhdGggZD0iTTAuMjgxNDk0IDQ2NC43NDNDOS4wMTY5NyA3MTIuNjY4IDIzMC40MDcgMTA3My40MSA0ODAuNTA4IDEwNjQuNzVDNzMwLjYwOCAxMDU2LjA5IDEwNTAuNzggODI5Ljk2NiAxMDQyLjA1IDU4Mi4wNEMxMDMzLjMxIDMzNC4xMTUgNjg3LjQxMSAtOC40OTUxOCA0MzcuMzEgMC4xNjA4MThDMTg3LjIxMSA4LjgxNjc4IC04LjQ1Mzk4IDIxNi44MTcgMC4yODE0OTQgNDY0Ljc0M0wwLjI4MTQ5NCA0NjQuNzQzTDAuMjgxNDk0IDQ2NC43NDNaIiBpZD0iT3ZhbCIgZmlsbD0iI0ZGRTFFOSIgc3Ryb2tlPSJub25lIiAvPg0KICAgIDxwYXRoIGQ9Ik0xMDQwLjQ5IDM5Mi43NDRDOTM0LjIxOCAxNjYuODY0IDU4Ni4yMDMgLTgwLjQyNTcgMzU3Ljg2NyAyNS4xMDIzQzEyOS41MyAxMzAuNjMgLTc3LjYyMjkgNDY0LjYwNSAyOC42NTIgNjkwLjQ4NUMxMzQuOTI3IDkxNi4zNjQgNTkxLjE0NCAxMDk4LjM0IDgxOS40OCA5OTIuODA5QzEwNDcuODIgODg3LjI4MSAxMTQ2Ljc3IDYxOC42MjMgMTA0MC40OSAzOTIuNzQ0TDEwNDAuNDkgMzkyLjc0NEwxMDQwLjQ5IDM5Mi43NDRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5NzAuMjkzNSAyMi4yMjE2MikiIGlkPSJPdmFsIiBmaWxsPSIjRkFGM0UzIiBzdHJva2U9Im5vbmUiIC8+DQogIDwvZz4NCjwvc3ZnPg==")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center",
    minHeight: 650,
    textAlign: "center",
    margin: "-60px 0",
  },
  eyeCatcherInnerWrapper: {
    paddingTop: 185,
    paddingRight: 100,
    paddingLeft: 100,
  },
  bg: {
    backgroundColor: "#d8f0ed",
  },
  intro: {
    fontSize: "1.1rem",
    fontWeight: "normal",
    margin: "0 0 1.8em",
  },
  introHeadline: {
    color: theme.palette.primary.light,
    fontWeight: "bold",
  },
  searchWrapper: {
    position: "relative",
    width: "100%",
    zIndex: 10,
  },
}));

export default function EyeCatcher() {
  const classes = useStyles();

  return (
    <Container
      maxWidth="xl"
      disableGutters={true}
      className={classes.eyeCatcherOuterWrapper}
    >
      <Container maxWidth="lg">
        <Grid container item>
          <Grid item xs={12} md={6}>
            <div className={classes.eyeCatcherInnerWrapper}>
              <Typography variant="h4" gutterBottom={true}>
                Es war noch nie so einfach ein Held zu sein.
              </Typography>
              <Typography variant="body2">
                Corona bedroht die Existenz vieler kleiner Läden und Geschäfte.
                Es liegt an uns dies zu verhindern. Hier kannst du helfen.
              </Typography>
              <SearchWidget />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className={classes.eyeCatcherInnerWrapper}>
              <Typography variant="h4" gutterBottom={true}>
                Der beste Weg raus aus der Krise, ist gleich um die Ecke: Deine
                Nachbarschaft.
              </Typography>
              <Typography variant="body2">
                Registriere dich hier und verhilf deinem Laden zu mehr
                Aufmerksamkeit. Bei Fragen schreib uns eine E-Mail an{" "}
                <Link href="mailto:info@smallbusinesshero.de">
                  info@smallbusinesshero.de
                </Link>{" "}
                oder schau auf unserer FAQ-Seite vorbei.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}
