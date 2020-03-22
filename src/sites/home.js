import React, { useState} from "react";
import { Container, Typography, Divider } from "@material-ui/core";
import StoresService from "../services/stores";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Card from './card'


const useStyles = makeStyles(theme => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400
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
    backgroundColor: 'white'
  },
  storeImg: {
maxWidth:'200px',
maxHeight:'200px',
  }
}));

export default function Home() {
  const classes = useStyles();
  const [kiez, setKiez] = useState("");

  const [storeData, setStoreData] = useState('');


  const fetchStoreData = event => {
    event.preventDefault()
    const StoreServiceInstance = new StoresService();
    StoreServiceInstance.getStores(kiez).then(setStoreData);
    console.log(kiez, storeData)
  };


    return (<>
        <Container maxWidth={'xs'}>
            <Divider className={classes.divider} />
            <Typography variant="h6">
                Are you ready to save the city?
            </Typography>
            <Typography variant="body1" gutterBottom={true}>
        Today is a wonderful day, because you get to save your neighborhood, and better yet, you can do it by buying the things you would anyway! Please join us on this mission- save our friends!
            </Typography>
            <Divider className={classes.divider} />
        <Paper component="form" className={classes.root}>
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
            onClick={(event) => fetchStoreData(event)}
          >
            <SearchIcon />
          </IconButton>
        </Paper>
      {storeData ===[] && 'No results'}
       {!!storeData.length && <Card storeData={storeData}/>
      }
      </Container>
    </>
  );
}
