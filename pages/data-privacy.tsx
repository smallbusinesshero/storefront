import React from 'react';
import { Typography, Container, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    content: {
        width: '100%',
        padding: '10px'
    },
}));

const DataPrivacy = props => {

    const classes = useStyles();

    return (
        <Container>
            <Grid container item xs={12}>
                <Paper className={classes.content}>
                <Typography variant="h6" display="block">Datenschutz</Typography>
                    <br />
                    <Typography variant="body1" display="block">TBD</Typography>
                </Paper>
            </Grid>
        </Container>
    );
};

DataPrivacy.propTypes = {};

export default DataPrivacy;