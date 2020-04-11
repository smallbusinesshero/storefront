import { FormControl, InputLabel, MenuItem, OutlinedInput, Typography, Select } from '@material-ui/core';
import { Container, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Formik } from 'formik';
import RegisterInitialValues from './register.init';
import RegisterValidationSchema from './register.validation';
import AuthService from '../../../services/auth';

const useStyles = makeStyles(theme => ({
    label: {
        backgroundColor: 'white',
        padding: '1px 20px'
    },
}));

export const RegisterForm = (props) => {
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

    const classes = useStyles();
    const AuthServiceInstance = AuthService.getInstance();

    return (
        <Container>
            <Formik
                initialValues={RegisterInitialValues}
                validationSchema={RegisterValidationSchema}
                onSubmit={AuthServiceInstance.register}
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
                                    <Typography variant="h5">Registriere deinen Laden</Typography>
                                    <Typography variant="body1">Werde dank ein paar Infos von mehr Kunden und Besuchern entdeckt. Beantworte die Fragen und schon geht`s los.</Typography>
                                    <Typography variant="h6">Ladeninformationen</Typography>
                                </Grid>
                                <Grid item xs={12} md={7}>

                                    <FormControl fullWidth={true} required={true} variant="outlined">
                                        <InputLabel htmlFor="store_name" variant="outlined" className={classes.label} error={touched.store_name && Boolean(errors.store_name)}>Name des Ladens</InputLabel>
                                        <OutlinedInput
                                            id="store_name"
                                            name="store_name"
                                            value={values.store_name}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={touched.store_name && Boolean(errors.store_name)}
                                            autoFocus={true}
                                            placeholder="Shop Name"
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} md={5}>
                                    <FormControl fullWidth={true} required={true} size='medium' variant="outlined">
                                        <InputLabel htmlFor="store_category" variant="outlined" className={classes.label} error={touched.store_category && Boolean(errors.store_category)}>Kategorie</InputLabel>
                                        <Select
                                            id="store_category"
                                            name="store_category"
                                            value={values.store_category}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={touched.store_category && Boolean(errors.store_category)}
                                            placeholder="Kategorie"
                                        >
                                            <MenuItem value="10">Ten</MenuItem>
                                            <MenuItem value="20">Twenty</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} md={2}>
                                    <FormControl fullWidth={true} required={true} size='medium' variant="outlined">
                                        <InputLabel htmlFor="store_zipcode" variant="outlined" className={classes.label} error={touched.store_zipcode && Boolean(errors.store_zipcode)}>PLZ</InputLabel>
                                        <OutlinedInput
                                            id="store_zipcode"
                                            name="store_zipcode"
                                            value={values.store_zipcode}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={touched.store_zipcode && Boolean(errors.store_zipcode)}
                                            placeholder="Max-Muster-Straße 11, 54872 Musterhausen"
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} md={5}>
                                    <FormControl fullWidth={true} required={true} size='medium' variant="outlined">
                                        <InputLabel htmlFor="store_address" variant="outlined" className={classes.label} error={touched.store_address && Boolean(errors.store_address)}>Straße und Hausnummer</InputLabel>
                                        <OutlinedInput
                                            id="store_address"
                                            name="store_address"
                                            value={values.store_address}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={touched.store_address && Boolean(errors.store_address)}
                                            placeholder="Max-Muster-Straße 11, 54872 Musterhausen"
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} md={5}>
                                    <FormControl fullWidth={true} required={true} size='medium' variant="outlined">
                                        <InputLabel htmlFor="store_city" variant="outlined" className={classes.label} error={touched.store_city && Boolean(errors.store_city)}>Stadtteil und Kiez/Viertel</InputLabel>
                                        <OutlinedInput
                                            id="store_city"
                                            name="store_city"
                                            value={values.store_city}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={touched.store_city && Boolean(errors.store_city)}
                                            placeholder="München"
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl fullWidth={true} required={true} size='medium' variant="outlined">
                                        <InputLabel htmlFor="store_description" variant="outlined" className={classes.label} error={touched.store_description && Boolean(errors.store_description)}>Kurze Beschreibung des Laden</InputLabel>
                                        <OutlinedInput
                                            style={{ height: '125px' }}
                                            id="store_description"
                                            name="store_description"
                                            value={values.store_description}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={touched.store_description && Boolean(errors.store_description)}
                                            placeholder="Beschreibe Deinen Shop"
                                            multiline={true}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="h6">Inhaberkonto</Typography>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <FormControl fullWidth={true} required={true} size='medium' variant="outlined">
                                        <InputLabel htmlFor="firstname" variant="outlined" className={classes.label} error={touched.firstname && Boolean(errors.firstname)}>Vorname</InputLabel>
                                        <OutlinedInput
                                            id="firstname"
                                            name="firstname"
                                            value={values.firstname}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={touched.firstname && Boolean(errors.firstname)}
                                            placeholder="Max Mustermann"
                                        />
                                    </FormControl>

                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <FormControl fullWidth={true} required={true} size='medium' variant="outlined">
                                        <InputLabel htmlFor="lastname" variant="outlined" className={classes.label} error={touched.lastname && Boolean(errors.lastname)}>Nachname</InputLabel>
                                        <OutlinedInput
                                            id="lastname"
                                            name="lastname"
                                            value={values.lastname}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={touched.lastname && Boolean(errors.lastname)}
                                            placeholder="Max Mustermann"
                                        />
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <FormControl fullWidth={true} required={true} size='medium' variant="outlined">
                                        <InputLabel htmlFor="email" variant="outlined" className={classes.label} error={touched.email && Boolean(errors.email)}>E-Mail</InputLabel>
                                        <OutlinedInput
                                            id="email"
                                            type="email"
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
                                        <InputLabel htmlFor="email_repeat" variant="outlined" className={classes.label} error={touched.email_repeat && Boolean(errors.email_repeat)}>E-Mail wiederholen</InputLabel>
                                        <OutlinedInput
                                            id="email_repeat"
                                            type="email"
                                            name="email_repeat"
                                            value={values.email_repeat}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={touched.email_repeat && Boolean(errors.email_repeat)}
                                            placeholder="******"
                                        />
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <FormControl fullWidth={true} required={true} size='medium' variant="outlined">
                                        <InputLabel htmlFor="password" variant="outlined" className={classes.label} error={touched.password && Boolean(errors.password)}>Passwort</InputLabel>
                                        <OutlinedInput
                                            id="password"
                                            type="password"
                                            name="password"
                                            value={values.password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={touched.password && Boolean(errors.password)}
                                            placeholder="******"
                                        />
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <FormControl fullWidth={true} required={true} size='medium' variant="outlined">
                                        <InputLabel htmlFor="password_repeat" variant="outlined" className={classes.label} error={touched.password_repeat && Boolean(errors.password_repeat)}>Passwort wiederholen</InputLabel>
                                        <OutlinedInput
                                            id="password_repeat"
                                            type="password"
                                            name="password_repeat"
                                            value={values.password_repeat}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={touched.password_repeat && Boolean(errors.password_repeat)}
                                            placeholder="******"
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="h6">Kontaktmöglichkeiten</Typography>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <FormControl fullWidth={true} required={true} size='medium' variant="outlined">
                                        <InputLabel htmlFor="store_email" variant="outlined" className={classes.label} error={touched.store_email && Boolean(errors.store_email)}>E-Mail</InputLabel>
                                        <OutlinedInput
                                            id="store_email"
                                            type="email"
                                            name="store_email"
                                            value={values.store_email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={touched.store_email && Boolean(errors.store_email)}
                                            placeholder="max@mustermann.de"
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <FormControl fullWidth={true} required={false} size='medium' variant="outlined">
                                        <InputLabel htmlFor="store_twitter" variant="outlined" className={classes.label} error={touched.store_twitter && Boolean(errors.store_twitter)}>Twitter</InputLabel>
                                        <OutlinedInput
                                            id="store_twitter"
                                            name="store_twitter"
                                            value={values.store_twitter}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={touched.store_twitter && Boolean(errors.store_twitter)}
                                            placeholder="https://"
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <FormControl fullWidth={true} required={false} size='medium' variant="outlined">
                                        <InputLabel htmlFor="store_facebook" variant="outlined" className={classes.label} error={touched.store_facebook && Boolean(errors.store_facebook)}>Facebook</InputLabel>
                                        <OutlinedInput
                                            id="store_facebook"
                                            name="store_facebook"
                                            value={values.store_facebook}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={touched.store_facebook && Boolean(errors.facstore_facebookebook)}
                                            placeholder="https://"
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <FormControl fullWidth={true} required={false} size='medium' variant="outlined">
                                        <InputLabel htmlFor="store_instagram" variant="outlined" className={classes.label} error={touched.store_instagram && Boolean(errors.store_instagram)}>Instagram</InputLabel>
                                        <OutlinedInput
                                            id="store_instagram"
                                            name="store_instagram"
                                            value={values.store_instagram}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={touched.store_instagram && Boolean(errors.store_instagram)}
                                            placeholder="https://"
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="h6">Medien</Typography>
                                    <Typography variant="body2"><strong>Teaser</strong></Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl fullWidth={true} required={false} size='medium' variant="outlined">
                                        <OutlinedInput
                                            type="file"
                                            id="store_image"
                                            name="store_image"
                                            value={values.store_image}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={touched.store_image && Boolean(errors.store_image)}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6} md={9}></Grid>
                                <Grid item xs={6} md={3}>
                                    <Button type="submit" fullWidth={true} disableFocusRipple={true} disableRipple={true} disabled={isSubmitting || !isValid}>
                                        Registrieren
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