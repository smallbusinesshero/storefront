import React, { useState } from "react";
import { CustomButton } from "../../../../components/atoms/Button";
import { analyticsSearchLocation } from "..../../../services/analytics";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { SvgIcon, Container, Grid, Typography } from "@material-ui/core";
import mockData from "../../../../assets/mock-data/mock-data";
import AddressIcon from "../../../../assets/icons/ecommerce/Address.svg";
import StoresService from "../../../../services/stores";
import CardCarousel from "../../../../components/molecules/CardCarousel";

const useStyles = makeStyles((theme: Theme) => ({
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  searchPanel: {
    padding: "2rem",
  },
  searchWrapper: {
    position: "relative",
    width: "100%",
    zIndex: 10,
  },
  search: {
    width: "100%",
    padding: "1em 0.5em 1em 3em",
    border: "1px solid #eee",
    fontSize: "1rem",
    outline: "none",
  },
  searchMarker: {
    position: "absolute",
    left: "0.7em",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: "20px",
  },
  form: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    flexDirection: "column",
  },
  searchLabel: {
    position: "absolute",
    display: "block",
    padding: "0 0.5em",
    top: "-0.8em",
    left: "0.5em",
    backgroundColor: "white",
    color: theme.palette.primary.dark,
    fontSize: "12px",
  },
  selectionList: {
    backgroundColor: "white",
    border: "1px solid #eee",
    padding: 0,
    marginTop: "-1px",
    position: "absolute",
    left: 0,
    top: "100%",
    listStyleType: "none",
    width: "100%",
    boxShadow: "0 6px 7px 0px rgba(0, 0, 0, 0.1)",
  },
  selectionListItem: {
    padding: "0.5em 0.8em",
    "-webkit-appearance": "none",
  },
  noResults: {
    backgroundColor: "white",
    marginTop: 25,
    padding: 10,
  },
}));

export default function SearchWidget() {
  const classes = useStyles();
  const [result, setResult] = useState("");
  const [filteredLocations, setFilteredLocations] = useState([]);

  const [storeData, setStoreData] = useState([]);
  let submit: boolean = false;

  const fetchStoreData = async (location) => {
    const StoreServiceInstance = new StoresService();
    setStoreData(await StoreServiceInstance.getStores(location));
  };

  return (
    <div className={classes.searchPanel}>
      <form
        className={classes.form}
        onSubmit={(e) => {
          e.preventDefault();
          fetchStoreData(result);
          submit = true;
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
            value={result}
            placeholder="z.B. Donaustraße, Berlin"
            onChange={(e) => {
              setResult(e.target.value);
              setFilteredLocations(
                e.target.value
                  ? mockData.kiezList.filter((location) =>
                      location.toLowerCase().match(e.target.value.toLowerCase())
                    )
                  : []
              );
            }}
          />
          {result && filteredLocations && filteredLocations.length > 0 && (
            <ul className={classes.selectionList}>
              {filteredLocations.map((option) => (
                <li
                  key={option}
                  className={classes.selectionListItem}
                  onClick={(e) => {
                    e.preventDefault();
                    setResult(option);
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
            fetchStoreData(result);
          }}
        >
          Suchen{" "}
        </CustomButton>
      </form>
      <Container maxWidth={"md"}>
        {storeData.length > 0 ? (
          <>
            <CardCarousel storeData={storeData} />
          </>
        ) : (
          submit &&
          result.length > 0 && (
            <Grid item xs={12} className={classes.noResults}>
              <Typography variant="body1">
                Keine Ergebnisse für Suche nach <strong>{result}</strong>
              </Typography>
            </Grid>
          )
        )}
      </Container>
    </div>
  );
}
