import { MenuItem, Typography } from "@material-ui/core";
import { Container, Grid, Button } from "@material-ui/core";
import { Formik } from "formik";
import RegisterInitialValues from "./register.init";
import RegisterValidationSchema from "./register.validation";
import AuthService from "../../../services/auth";
import CustomFormInput from "../../molecules/CustomFormInput";
import CustomFormSelect from "../../molecules/CustomFormSelect";
import { CustomButton } from "../../atoms/Button";

export const RegisterForm = (props) => {
  const AuthServiceInstance = AuthService.getInstance();

  return (
    <Container>
      <Formik
        initialValues={RegisterInitialValues}
        validationSchema={RegisterValidationSchema}
        onSubmit={AuthServiceInstance.register}
      >
        {(props) => {
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
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Typography variant="h2" gutterBottom={true}>
                    Registriere deinen Laden
                  </Typography>
                  <Typography variant="body1" gutterBottom={true}>
                    Werde dank ein paar Infos von mehr Kunden und Besuchern
                    entdeckt. Beantworte die Fragen und schon geht`s los.
                    <br />
                  </Typography>
                </Grid>
                <Grid item xs={12} md={7}>
                  <CustomFormInput
                    name="store_name"
                    placeholder="Name des Ladens"
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  >
                    Wie heißt dein Laden?
                  </CustomFormInput>
                </Grid>
                <Grid item xs={12} md={5}>
                  <CustomFormSelect
                    name="store_category"
                    placeholder="Bitte wählen"
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    label="Produktkategorie"
                  >
                    <MenuItem value="0">Bitte wählen</MenuItem>
                    <MenuItem value="10">Home and Living</MenuItem>
                    <MenuItem value="20">Food</MenuItem>
                  </CustomFormSelect>
                </Grid>
                <Grid item xs={12} md={2}>
                  <CustomFormInput
                    name="store_zipcode"
                    placeholder="54878"
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  >
                    PLZ
                  </CustomFormInput>
                </Grid>
                <Grid item xs={12} md={5}>
                  <CustomFormInput
                    name="store_address"
                    placeholder="Max-Muster-Straße 11, 54872 Musterhausen"
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  >
                    Wo ist dein Laden?
                  </CustomFormInput>
                </Grid>
                <Grid item xs={12} md={5}>
                  <CustomFormInput
                    name="store_city"
                    placeholder="München"
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  >
                    Deine Stadt
                  </CustomFormInput>
                </Grid>
                <Grid item xs={12}>
                  <CustomFormInput
                    name="store_description"
                    placeholder="Beschreibe Deinen Shop"
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    multiline={true}
                  >
                    Hier kannst Du Deinen Laden kurz beschreiben
                  </CustomFormInput>
                </Grid>
                <Grid item xs={12} md={6}>
                  <CustomFormInput
                    name="firstname"
                    placeholder="Max"
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  >
                    Wie ist dein Vorname?
                  </CustomFormInput>
                </Grid>

                <Grid item xs={12} md={6}>
                  <CustomFormInput
                    name="lastname"
                    placeholder="Mustermann"
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  >
                    Wie ist dein Nachname?
                  </CustomFormInput>
                </Grid>

                <Grid item xs={12} md={6}>
                  <CustomFormInput
                    name="email"
                    placeholder="max.mustermann@online.de"
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  >
                    E-Mail
                  </CustomFormInput>
                </Grid>

                <Grid item xs={12} md={6}>
                  <CustomFormInput
                    name="email_repeat"
                    placeholder="max.mustermann@online.de"
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  >
                    E-Mail bestätigen
                  </CustomFormInput>
                </Grid>

                <Grid item xs={12} md={6}>
                  <CustomFormInput
                    name="password"
                    placeholder="*******"
                    type="password"
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  >
                    Passwort
                  </CustomFormInput>
                </Grid>

                <Grid item xs={12} md={6}>
                  <CustomFormInput
                    name="password_repeat"
                    placeholder="*******"
                    type="password"
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  >
                    Passwort bestätigen
                  </CustomFormInput>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h3" gutterBottom={true}>
                    Wie kann man dich erreichen?
                  </Typography>
                  <Typography variant="body1" gutterBottom={true}>
                    Erreiche noch mehr Leute, indem Du hier Social Media Kanäle
                    deines Geschäftes hinzufügst.
                    <br />
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <CustomFormInput
                    name="store_phone"
                    placeholder="+49"
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  >
                    Telefonnummer
                  </CustomFormInput>
                </Grid>
                <Grid item xs={12} md={6}>
                  <CustomFormInput
                    name="store_email"
                    placeholder="max.mustermann@online.de"
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  >
                    E-Mail
                  </CustomFormInput>
                </Grid>
                <Grid item xs={12} md={6}>
                  <CustomFormInput
                    name="store_whatsapp"
                    placeholder="+49"
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  >
                    Whatsapp
                  </CustomFormInput>
                </Grid>
                <Grid item xs={12} md={6}>
                  <CustomFormInput
                    name="store_website"
                    placeholder="https://"
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  >
                    Website
                  </CustomFormInput>
                </Grid>
                <Grid item xs={12} md={6}>
                  <CustomFormInput
                    name="store_twitter"
                    placeholder="https://"
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  >
                    Twitter
                  </CustomFormInput>
                </Grid>
                <Grid item xs={12} md={6}>
                  <CustomFormInput
                    name="store_facebook"
                    placeholder="https://"
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  >
                    Facebook
                  </CustomFormInput>
                </Grid>
                <Grid item xs={12} md={6}>
                  <CustomFormInput
                    name="store_instagram"
                    placeholder="https://"
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  >
                    Instagram
                  </CustomFormInput>
                </Grid>
                <Grid item xs={12} md={6}>
                  <CustomFormInput
                    name="store_facetime"
                    placeholder="+49"
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  >
                    Facetime
                  </CustomFormInput>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h3" gutterBottom={true}>
                    Fotos und Videos
                  </Typography>
                  <Typography variant="body1" gutterBottom={true}>
                    Lorem ipsum ...
                    <br />
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h4" gutterBottom={true}>
                    Nochmal zu dir...
                  </Typography>
                  <Typography variant="body2" gutterBottom={true}>
                    Zeig dich auf deinem Profil doch von deiner besten Seite.
                    Hier kannst du ein Foto von dir hochladen, damit deine
                    Kunden auch wissen, mit wem Sie es zu tun haben. Ansonsten
                    kannst Du hier auch das Interieur deines Ladens hochladen.
                    <br />
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <CustomFormInput
                    name="store_ownerimage"
                    placeholder=""
                    type="file"
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  >
                    Dein Foto
                  </CustomFormInput>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h4" gutterBottom={true}>
                    Und jetzt dein Laden...
                  </Typography>
                  <Typography variant="body2" gutterBottom={true}>
                    Die Leute in deiner Nachbarschaft kennen deinen Laden - und
                    besonders von außen. Lad hier ein Foto von deiner Ladenfront
                    hoch um den Wiedererkennungswert zu erhöhen.
                    <br />
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <CustomFormInput
                    name="store_image"
                    placeholder=""
                    type="file"
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  >
                    Foto des Ladens (vorzugsweise die Ladenfront)
                  </CustomFormInput>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h3" gutterBottom={true}>
                    Produkte
                  </Typography>
                  <Typography variant="body1" gutterBottom={true}>
                    tbd ...
                    <br />
                  </Typography>
                </Grid>
                <Grid item xs={6} md={9}></Grid>
                <Grid item xs={6} md={3}>
                  <CustomButton
                    type="submit"
                    fullWidth={true}
                    disableFocusRipple={true}
                    disableRipple={true}
                    disabled={isSubmitting || !isValid}
                  >
                    Registrieren
                  </CustomButton>
                </Grid>
              </Grid>
            </form>
          );
        }}
      </Formik>
    </Container>
  );
};
