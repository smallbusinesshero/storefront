import React from 'react';
import { Typography, Container, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import { Formik } from 'formik';
import * as Yup from "yup"

import { RegisterForm1, RegisterForm2, RegisterForm3 } from '../../components/organism/client/register-form';


function getSteps() {
    return ['Registriere deinen Laden', 'Wie erreicht man Euch', 'Deine Produkte'];
}

function getStepContent(stepIndex: number, props) {
    switch (stepIndex) {
        case 0:
            return <RegisterForm1 {...props} />;
        case 1:
            return <RegisterForm2 {...props} />;
        case 2:
            return <RegisterForm3 {...props} />;
        default:
            return 'Unknown stepIndex';
    }
}

const useFormStyles = makeStyles(theme => ({
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

const Form = props => {

    const classes = useFormStyles();

    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <form onSubmit={() => { }}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <div>
                        <Typography className={classes.instructions}>All steps completed</Typography>
                        <Button onClick={handleReset}>Reset</Button>
                    </div>
                ) : (
                        <div>
                            {getStepContent(activeStep, props)}
                            <Typography className={classes.instructions}>{}</Typography>
                            <div>
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    className={classes.backButton}
                                >
                                    Back
                        </Button>
                                <Button variant="contained" color="primary" onClick={handleNext}>
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>
                            </div>
                        </div>
                    )}
            </div>
        </form>
    );
}


const useClientRegistrationStyles = makeStyles(theme => ({
    content: {
        width: '100%',
        padding: '10px'
    },
}));

const ClientRegistration = props => {

    const classes = useClientRegistrationStyles();

    const initialValues = {};

    const validationSchema = Yup.object({
        "business-shop-name": Yup.string()
            .required("Shop Name is required"),
    });

    const onSubmit = (data) => { console.log(data); }

    return (
        <Container>
            <Grid container item xs={12}>
                <Paper className={classes.content}>
                    <Formik
                        render={props => <Form {...props} />}
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    />
                </Paper>
            </Grid>
        </Container>
    );
};

ClientRegistration.propTypes = {};

export default ClientRegistration;