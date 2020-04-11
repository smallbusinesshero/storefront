import React from 'react';
import { Container, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { LoginForm } from '../../components/organism/client/login.form';

const useStyles = makeStyles(theme => ({
    content: {
        width: '100%',
        padding: '10px'
    },
}));

const ClientLogin = props => {

    const classes = useStyles();

    return (
        <Container>
            <Grid container item xs={12}>
                <Paper className={classes.content}>
                    <LoginForm {...props} />
                </Paper>
            </Grid>
        </Container>
    );
};

ClientLogin.propTypes = {};

export default ClientLogin;