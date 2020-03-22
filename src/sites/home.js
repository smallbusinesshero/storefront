import React, { useState } from "react";
import { Container, Typography, Divider } from "@material-ui/core";
import StoresService from "../services/stores";
import { makeStyles } from "@material-ui/core/styles";
import CardCarousel from "./card-carousel";
import "./Home.css";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    if (event) {
      event.preventDefault();
    }
    const StoreServiceInstance = new StoresService();
    StoreServiceInstance.getStores(kiez).then(setStoreData);
    console.log(kiez, storeData);
  };

  const kiezFilter = kiezList.filter(locale =>
    locale.toLowerCase().includes(kiez.toLowerCase())
  );

  return (
    <>
      <Container maxWidth={"xs"} style={{ overflow: "hidden" }}>
        <Divider className={classes.divider} />
        <div class="home__typo-wrapper"></div>
        <Typography variant="h5" className="home__align-right">
          Your favourite neighborhood stores, now delivering straight to your
          door
        </Typography>
        <Divider className={classes.divider} />
        <div className="home__search_panel">
          <form class="home__form" onSubmit={e => fetchStoreData(e)}>
            <div className="home__search-wrapper">
              <label for="home__search" className="home__search-label">
                Ort
              </label>
              <FontAwesomeIcon
                className="home__search-marker"
                icon={faMapMarkerAlt}
              />
              <input
                id="home__search"
                className="home__search"
                type="text"
                value={kiez}
                placeholder="Wähle einen Ort…"
                autocomplete="new-password"
                onChange={e => {
                  setKiez(e.target.value);
                }}
              ></input>
            </div>
            <button className="home__submit-btn">Suchen</button>
            {!!kiez &&
              kiezFilter.length !== 1 &&
              kiez !== kiezFilter &&
              !!kiezFilter.length && (
                <ul className="home__selection-list">
                  {kiezFilter.map(option => {
                    return (
                      <li
                        className="home__selection-list-item"
                        onClick={e => {
                          console.log("option", option);
                          setKiez(option);
                          fetchStoreData(e);
                        }}
                      >
                        {option}
                      </li>
                    );
                  })}
                </ul>
              )}
          </form>
        </div>
        {storeData === [] && "No results"}
        {!!storeData.length && (
          <>
            <CardCarousel storeData={storeData} />
          </>
        )}
      </Container>
    </>
  );
}
