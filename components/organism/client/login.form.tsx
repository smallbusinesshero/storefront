import { FormControl, InputLabel, OutlinedInput, Typography } from '@material-ui/core';
import { Container, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LoginInitialValues from './login.init';
import LoginValidationSchema from './login.validation';
import AuthService from '../../../services/auth';
import { Formik } from 'formik';

const useStyles = makeStyles(theme => ({
    label: {
        backgroundColor: 'white'
    },
}));

export const LoginForm = (props) => {
    const classes = useStyles();
    const AuthServiceInstance = AuthService.getInstance();

    return (
        <Container>
            <Formik
                initialValues={LoginInitialValues}
                validationSchema={LoginValidationSchema}
                onSubmit={AuthServiceInstance.login}
            >
                {props => {
                    const {
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isValid,
                        isSubmitting,
                    } = props;
                    return (
                        <form onSubmit={handleSubmit} noValidate={true}>
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    <Typography variant="h5">Login</Typography>
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <FormControl fullWidth={true} required={true} size='medium' variant="outlined">
                                        <InputLabel htmlFor="email" variant="outlined" className={classes.label} error={touched.email && Boolean(errors.email)}>E-Mail</InputLabel>
                                        <OutlinedInput
                                            id="email"
                                            name="email"
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={touched.email && Boolean(errors.email)}
                                            placeholder="******"
                                        />
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <FormControl fullWidth={true} required={true} size='medium' variant="outlined">
                                        <InputLabel htmlFor="password" variant="outlined" className={classes.label} error={touched.password && Boolean(errors.password)}>Passwort</InputLabel>
                                        <OutlinedInput
                                            id="password"
                                            name="password"
                                            value={values.password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={touched.password && Boolean(errors.password)}
                                            placeholder="******"
                                        />
                                    </FormControl>
                                </Grid>

                                <Grid item xs={6} md={9}></Grid>
                                <Grid item xs={6} md={3}>
                                    <Button type="submit" fullWidth={true} disableFocusRipple={true} disableRipple={true} disabled={isSubmitting || !isValid}>
                                        Einloggen
                        </Button>
                                </Grid>

                            </Grid>
                        </form>
                    );
                }}
            </Formik>
        </Container>
    );
};