import React, { useState } from "react";
import { Container } from "@material-ui/core";

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function Home() {
    const classes = useStyles();
    const [kiez, setKiez] = useState('');
    const kiezs = [
        'neukölln',
        'kreuzberg',
        'mitte',
        'prenzlauerberg'
    ]

    async function onSubmit(value) {
        alert(`${value}`)
        setKiez('')  // just for now to clear the field
        let response = await fetch('endpoint');
        let data = await response.json();
        return data;
    }

    return (<>
        <Container maxWidth={'xs'}>

            <Paper component="form" className={classes.root}>
                <InputBase
                    value={kiez} 
                    onChange={e => setKiez(e.target.value)}
                    className={classes.input}
                    placeholder="Placeholder text"
                    inputProps={{ 'aria-label': 'Placeholder text' }}
                />
                <IconButton className={classes.iconButton} aria-label="search" onClick={() => onSubmit(kiez)}>
                    <SearchIcon />
                </IconButton>
            </Paper>
        </Container>

    </>)
}