import React, { useState } from "react";
import { Container, SvgIcon, Grid } from "@material-ui/core";
import StoresService from "../services/stores";
import CardCarousel from "../components/molecules/CardCarousel";
import useStyles from "../assets/styles/index_styles";
import mockData from "../assets/mock-data/mock-data";
import AddressIcon from "../assets/icons/ecommerce/Address.svg";
import { Typography } from "@material-ui/core";
import { CustomButton } from "../components/atoms/Button";
import { analyticsSearchLocation } from "../services/analytics";

export default function Home() {
  const classes = useStyles();
  const [kiez, setKiez] = useState("");
  const [filteredLocations, setFilteredLocations] = useState([]);

  const [storeData, setStoreData] = useState([]);

  const fetchStoreData = async (location) => {
    const StoreServiceInstance = new StoresService();
    setStoreData(await StoreServiceInstance.getStores(location));
  };

  return (
    <Container maxWidth={"md"} className={classes.wrapper}>
      <div className={classes.searchPanel}>
        <Typography className={classes.intro}>
          <span className={classes.introHeadline}>
            Sei ein Held zu Zeiten von Corona.
          </span>{" "}
          <br />
          Rette den Laden bei Dir um die Ecke. Hier kannst Du helfen.
        </Typography>
        <form
          className={classes.form}
          onSubmit={(e) => {
            e.preventDefault();
            fetchStoreData(kiez);
          }}
        >
          <div className={classes.searchWrapper}>
            <label htmlFor="home__search" className={classes.searchLabel}>
              Adresse oder Stadtviertel
            </label>
            <SvgIcon className={classes.searchMarker} viewBox={"0 0 20 50"}>
              <AddressIcon />
            </SvgIcon>
            <input
              id="home__search"
              className={classes.search}
              type="text"
              autoComplete="off"
              value={kiez}
              placeholder="z.B. Donaustraße, Berlin"
              onChange={(e) => {
                setKiez(e.target.value);
                setFilteredLocations(
                  e.target.value
                    ? mockData.kiezList.filter((location) =>
                        location
                          .toLowerCase()
                          .match(e.target.value.toLowerCase())
                      )
                    : []
                );
              }}
            />
            {kiez && filteredLocations && filteredLocations.length > 0 && (
              <ul className={classes.selectionList}>
                {filteredLocations.map((option) => (
                  <li
                    key={option}
                    className={classes.selectionListItem}
                    onClick={(e) => {
                      e.preventDefault();
                      setKiez(option);
                      setFilteredLocations([]);
                      fetchStoreData(option);
                      analyticsSearchLocation(option);
                    }}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <br />
          <CustomButton
            fullWidth={true}
            disableFocusRipple={true}
            disableRipple={true}
            onClick={(e) => {
              //e.preventDefault();
              fetchStoreData(kiez);
            }}
          >
            Suchen{" "}
          </CustomButton>
        </form>
      </div>
      {storeData.length > 0 ? (
        <>
          <CardCarousel storeData={storeData} />
        </>
      ) : (
        kiez.length > 0 && (
          <Grid item xs={12} className={classes.noResults}>
            <Typography variant="body1">
              Keine Ergebnisse für Suche nach <strong>{kiez}</strong>
            </Typography>
          </Grid>
        )
      )}
    </Container>
  );
}
