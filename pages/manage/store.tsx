import React from 'react';
import { Container, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Formik } from 'formik';
import { LoginForm } from '../../components/organism/client/login.form';
import LoginInitialValues from '../../components/organism/client/login.init';
import LoginValidationSchema from '../../components/organism/client/login.validation';
import AuthService from '../../services/auth';

const useStyles = makeStyles(theme => ({
    content: {
        width: '100%',
        padding: '10px'
    },
}));

const ManageStore = props => {

    const classes = useStyles();
    const AuthServiceInstance = AuthService.getInstance();

    return (
        <Container>
            <Grid container item xs={12}>
                <Paper className={classes.content}>
                    Manage Store Meta Data
                </Paper>
            </Grid>
        </Container>
    );
};

ManageStore.propTypes = {};

export default ManageStore;