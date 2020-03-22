import React, { useState } from "react";
import { Container, Typography, Divider } from "@material-ui/core";
import StoresService from "../services/stores";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import CardCarousel from "./card-carousel";

const kiezList = [
  "Körtekiez",
  "Donaukiez",
  "Weserkiez",
  "Kollwitzkiez",
  "Helmholtzkiez",
  "Boxhagener Kiez",
  "Samariterkiez",
  "Graefekiez",
  "Wrangelkiez",
  "Ludwigkirchkiez",
  "Stuttgarter Platz",
  "Brüsseler Kiez",
  "Neukölln",
  "Treptow",
  "Kreuzberg",
  "Bohnenviertel",
  "Heusteigviertel",
  "Belgisches Viertel",
  "Agnesviertel",
  "Severinsviertel",
  "Kwartier Latäng",
  "Eigelstein",
  "Kunibertsviertel",
  "Rathenauviertel",
  "Kortländer-Kiez",
  "Ehrenfeld",
  "Treppenviertel",
  "Karolinenviertel",
  "Schanzenviertel",
  "St. Georg",
  "St. Pauli",
  "Glockenbachviertel",
  "Schwabing",
  "Maxvorstadt",
  "Au"
];

const useStyles = makeStyles(theme => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    maxWidth: 400
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 30,
    margin: 4,
    backgroundColor: "white"
  }
}));

export default function Home() {
  const classes = useStyles();
  const [kiez, setKiez] = useState("");

  const [storeData, setStoreData] = useState("");

  const fetchStoreData = event => {
    event.preventDefault();
    const StoreServiceInstance = new StoresService();
    StoreServiceInstance.getStores(kiez).then(setStoreData);
    console.log(kiez, storeData);
  };

  const kiezFilter = kiezList.filter(locale =>
    locale.toLowerCase().includes(kiez.toLowerCase())
  );

  return (
    <>
      <Container maxWidth={"xs"}>
        <Divider className={classes.divider} />
        <Typography variant="h6">Are you ready to save the city?</Typography>
        <Typography variant="body1" gutterBottom={true}>
          Today is a wonderful day, because you get to save your neighborhood,
          and better yet, you can do it by buying the things you would anyway!
          Please join us on this mission- save our friends!
        </Typography>
        <Divider className={classes.divider} />
        <Paper elevation={2} component="form" className={classes.root}>
          <InputBase
            value={kiez}
            onChange={e => setKiez(e.target.value)}
            className={classes.input}
            placeholder="Placeholder text"
            inputProps={{ "aria-label": "Placeholder text" }}
          />
          <IconButton
            className={classes.iconButton}
            aria-label="search"
            onClick={event => fetchStoreData(event)}
          >
            <SearchIcon />
          </IconButton>
        </Paper>
        {!!kiez && kiezFilter.length !== 1 && kiez!== kiezFilter && !!kiezFilter.length &&(
          <Paper 
            elevation={2}
            className={classes.root}
            style={{ flexDirection: "column", marginTop: "10px" }}
          >
            {kiezFilter.map(option => {
              return (
                <Typography onClick={() => setKiez(option)}>
                  {option}
                </Typography>
              );
            })}
          </Paper>
        )}
        {storeData === [] && "No results"}
        {!!storeData.length && <CardCarousel storeData={storeData} />}
      </Container>
    </>
  );
}
