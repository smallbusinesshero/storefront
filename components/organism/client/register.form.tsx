import * as React from "react";
import { MenuItem, Typography, Link, Box } from "@material-ui/core";
import {
  Container,
  Grid,
  Divider,
  FormControlLabel,
  Checkbox,
  SvgIcon,
  Button,
} from "@material-ui/core";
import TrashIcon from "../../../assets/icons/24/trashcan.svg";
import { Formik, FieldArray } from "formik";
import RegisterInitialValues from "./register.init";
import RegisterValidationSchema from "./register.validation";
import AuthService from "../../../services/auth";
import CustomFormInput from "../../molecules/CustomFormInput";
import CustomFormSelect from "../../molecules/CustomFormSelect";
import { CustomButtonHighlight } from "../../atoms/Button";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  registerIntroduction: {
    marginBottom: 50,
  },
  registerContainer: {
    marginBottom: 50,
  },
  openingdeliveryIntroduction: {
    marginBottom: 50,
  },
  openingdeliveryContainer: {
    marginBottom: 50,
  },
  contactIntroduction: {
    marginBottom: 50,
  },
  contactContainer: {
    marginBottom: 50,
  },
  picturesIntroduction: {
    marginBottom: 50,
  },
  picturesContainer: {
    marginBottom: 50,
  },
  productsIntroduction: {
    marginBottom: 50,
  },
  productsContainer: {
    marginBottom: 50,
  },
  productsImagePreview: {
    borderColor: "#CCC",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 4,
    padding: 0,
    overflow: "hidden",
    margin: "0 auto",
    height: 150,
  },
  labelOptional: {
    color: "#bbb",
    fontWeight: 600,
  },
}));

export const RegisterForm = () => {
  const AuthServiceInstance = AuthService.getInstance();

  const classes = useStyles();

  const previewHandler = (e, name, formikCb) => {
    console.log(e);
    const url = URL.createObjectURL(e.target.files[0]);
    const el = document.getElementById(name);
    el.setAttribute("src", url);
    el.style.display = "block";
    el.style.border = "#CCC 1px solid";
    formikCb(e);
  };

  return (
    <Container>
      <Formik
        initialValues={RegisterInitialValues}
        validationSchema={RegisterValidationSchema}
        onSubmit={AuthServiceInstance.register}
        validateOnChange={false}
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
              <Grid container spacing={3} className={classes.registerContainer}>
                <Grid item xs={12} className={classes.registerIntroduction}>
                  <Typography variant="h2" gutterBottom={true}>
                    Registriere deinen Laden
                  </Typography>
                  <Typography variant="body1" gutterBottom={true}>
                    Werde dank ein paar Infos von mehr Kunden und Besuchern
                    entdeckt. Beantworte die Fragen und schon geht`s los.
                    <br />
                  </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <CustomFormInput
                    name="firstname"
                    placeholder="Max"
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    required={true}
                  >
                    Wie heißt Du?
                  </CustomFormInput>
                </Grid>

                <Grid item xs={12} md={4}>
                  <CustomFormInput
                    name="lastname"
                    placeholder="Mustermann"
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    required={true}
                  >
                    Wie ist dein Nachname?
                  </CustomFormInput>
                </Grid>
                <Grid item xs={12} md={4}>
                  <CustomFormInput
                    name="store_name"
                    placeholder="Name des Ladens"
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    required={true}
                  >
                    Wie heißt dein Laden?
                  </CustomFormInput>
                </Grid>
                <Grid item xs={12} md={4}>
                  <CustomFormInput
                    name="store_street"
                    placeholder="Max-Muster-Straße"
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    required={true}
                  >
                    Wo ist dein Laden?
                  </CustomFormInput>
                </Grid>
                <Grid item xs={12} md={2}>
                  <CustomFormInput
                    name="store_streetnr"
                    placeholder="11"
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    required={true}
                  >
                    Hausnummer
                  </CustomFormInput>
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
                    required={true}
                  >
                    PLZ
                  </CustomFormInput>
                </Grid>

                <Grid item xs={12} md={4}>
                  <CustomFormInput
                    name="store_city"
                    placeholder="München"
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    required={true}
                  >
                    Deine Stadt
                  </CustomFormInput>
                </Grid>

                <Grid item xs={12} md={8}>
                  <CustomFormInput
                    name="store_description"
                    placeholder="Beschreibe Deinen Shop"
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    required={true}
                  >
                    Beschreibe deinen Laden
                  </CustomFormInput>
                </Grid>
                <Grid item xs={12} md={4}>
                  <CustomFormSelect
                    name="store_category"
                    placeholder="Bitte wählen"
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    label="Was verkaufst Du?"
                    required={true}
                  >
                    <MenuItem value="0">Bitte wählen</MenuItem>
                    <MenuItem value="10">Home and Living</MenuItem>
                    <MenuItem value="20">Food</MenuItem>
                  </CustomFormSelect>
                </Grid>

                <Grid item xs={12} md={4}>
                  <CustomFormInput
                    name="store_members"
                    placeholder="10"
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    required={true}
                  >
                    Wie viele Angestellte hast Du?
                  </CustomFormInput>
                </Grid>

                <Grid item xs={12} md={4}>
                  <CustomFormInput
                    name="phone"
                    placeholder="+49"
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    required={true}
                  >
                    Wie erreichen wir Dich?
                  </CustomFormInput>
                </Grid>
                <Grid item xs={12} md={4}>
                  <CustomFormInput
                    name="email"
                    placeholder="max@mustermann.de"
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    required={true}
                  >
                    Wie ist deine E-Mail Adresse?
                  </CustomFormInput>
                </Grid>
              </Grid>
              <Grid
                container
                spacing={3}
                className={classes.openingdeliveryContainer}
              >
                <Grid item xs={12} md={7}>
                  <Box className={classes.openingdeliveryIntroduction}>
                    <Typography variant="h3" gutterBottom={true}>
                      Öffnungszeiten
                    </Typography>
                    <Typography variant="body2" gutterBottom={true}>
                      Falls dein Laden geöffnet hat, gib hier bitte die Zeiten
                      an. <br />
                      Bitte zuerst den Tag auswählen und dann die Stunden
                      eintragen.
                      <br />
                      <br />
                    </Typography>
                  </Box>

                  <FieldArray
                    name="store_openinghours"
                    render={(arrayHelpers) => (
                      <div>
                        {values.store_openinghours.map((oh, index) => (
                          <React.Fragment key={index}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={
                                    values.store_openinghours[index].days.monday
                                  }
                                  onChange={handleChange}
                                  name={`store_openinghours[${index}].days.monday`}
                                  color="secondary"
                                />
                              }
                              label="Mo"
                              labelPlacement="top"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={
                                    values.store_openinghours[index].days
                                      .tuesday
                                  }
                                  onChange={handleChange}
                                  name={`store_openinghours[${index}].days.tuesday`}
                                  color="secondary"
                                />
                              }
                              label="Di"
                              labelPlacement="top"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={
                                    values.store_openinghours[index].days
                                      .wednesday
                                  }
                                  onChange={handleChange}
                                  name={`store_openinghours[${index}].days.wednesday`}
                                  color="secondary"
                                />
                              }
                              label="Mi"
                              labelPlacement="top"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={
                                    values.store_openinghours[index].days
                                      .thursday
                                  }
                                  onChange={handleChange}
                                  name={`store_openinghours[${index}].days.thursday`}
                                  color="secondary"
                                />
                              }
                              label="Do"
                              labelPlacement="top"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={
                                    values.store_openinghours[index].days.friday
                                  }
                                  onChange={handleChange}
                                  name={`store_openinghours[${index}].days.friday`}
                                  color="secondary"
                                />
                              }
                              label="Fr"
                              labelPlacement="top"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={
                                    values.store_openinghours[index].days
                                      .saturday
                                  }
                                  onChange={handleChange}
                                  name={`store_openinghours[${index}].days.saturday`}
                                  color="secondary"
                                />
                              }
                              label="Sa"
                              labelPlacement="top"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={
                                    values.store_openinghours[index].days.sunday
                                  }
                                  onChange={handleChange}
                                  name={`store_openinghours[${index}].days.sunday`}
                                  color="secondary"
                                />
                              }
                              label="So"
                              labelPlacement="top"
                            />
                            <br />
                            <br />
                            <Grid container item xs={12} spacing={3}>
                              <Grid item xs={12} md={5}>
                                <CustomFormInput
                                  name={`store_openinghours[${index}].from`}
                                  placeholder="08:00"
                                  values={values}
                                  errors={errors}
                                  touched={touched}
                                  handleChange={handleChange}
                                  handleBlur={handleBlur}
                                >
                                  von
                                </CustomFormInput>
                              </Grid>
                              <Grid item xs={12} md={5}>
                                <CustomFormInput
                                  name={`store_openinghours[${index}].to`}
                                  placeholder="16:00"
                                  values={values}
                                  errors={errors}
                                  touched={touched}
                                  handleChange={handleChange}
                                  handleBlur={handleBlur}
                                >
                                  bis
                                </CustomFormInput>
                              </Grid>

                              <Divider variant="middle" />
                            </Grid>
                            <br />
                            <br />
                          </React.Fragment>
                        ))}
                        <Link
                          underline="none"
                          onClick={(e) => {
                            e.preventDefault();
                            arrayHelpers.push({
                              days: {
                                monday: false,
                                tuesday: false,
                                wednesday: false,
                                thursday: false,
                                friday: false,
                                saturday: false,
                                sunday: false,
                              },
                              from: 0,
                              to: 0,
                            });
                          }}
                        >
                          Weitere Öffnungszeiten eintragen +
                        </Link>
                      </div>
                    )}
                  ></FieldArray>
                </Grid>

                <Grid item xs={12} md={5}>
                  <Box className={classes.openingdeliveryIntroduction}>
                    <Typography variant="h3" gutterBottom={true}>
                      Abholung, Lieferung
                    </Typography>
                    <Typography variant="body2" gutterBottom={true}>
                      Können deine Kunden ihre Einkäufe selbst abholen? <br />
                      Bietest Du eine Lieferung an?
                      <br />
                    </Typography>
                  </Box>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={values.store_pickup}
                        onChange={handleChange}
                        name="store_pickup"
                        color="secondary"
                      />
                    }
                    label="Abholung"
                  />
                  <br />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={values.store_delivery}
                        onChange={handleChange}
                        name="store_delivery"
                        color="secondary"
                      />
                    }
                    label="Lieferung"
                  />
                  <br />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={values.store_shipping}
                        onChange={handleChange}
                        name="store_shipping"
                        color="secondary"
                      />
                    }
                    label="Versand"
                  />
                </Grid>

                {/*
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

                
                -- FOR THE FUTURE -- 
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
                */}
              </Grid>
              <Grid container spacing={3} className={classes.contactContainer}>
                <Grid item xs={12} className={classes.contactIntroduction}>
                  <Typography variant="h2" gutterBottom={true}>
                    Wie kann man dich erreichen?
                  </Typography>
                  <Typography variant="body1" gutterBottom={true}>
                    Erreiche noch mehr Leute, indem Du hier Social Media Kanäle
                    deines Geschäftes hinzufügst.
                    <br />
                  </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <CustomFormInput
                    name="store_phone"
                    placeholder="+49"
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  >
                    Telefonnummer{" "}
                    <span className={classes.labelOptional}>(optional)</span>
                  </CustomFormInput>
                </Grid>
                <Grid item xs={12} md={4}>
                  <CustomFormInput
                    name="store_email"
                    placeholder="kontakt@meinladen.de"
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  >
                    E-Mail{" "}
                    <span className={classes.labelOptional}>(optional)</span>
                  </CustomFormInput>
                </Grid>
                <Grid item xs={12} md={4}>
                  <CustomFormInput
                    name="store_whatsapp"
                    placeholder="+49"
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  >
                    Whatsapp{" "}
                    <span className={classes.labelOptional}>(optional)</span>
                  </CustomFormInput>
                </Grid>
                <Grid item xs={12} md={4}>
                  <CustomFormInput
                    name="store_website"
                    placeholder="https://"
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  >
                    Website{" "}
                    <span className={classes.labelOptional}>(optional)</span>
                  </CustomFormInput>
                </Grid>
                <Grid item xs={12} md={4}>
                  <CustomFormInput
                    name="store_instagram"
                    placeholder="https://"
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  >
                    Instagram{" "}
                    <span className={classes.labelOptional}>(optional)</span>
                  </CustomFormInput>
                </Grid>
                <Grid item xs={12} md={4}>
                  <CustomFormInput
                    name="store_facebook"
                    placeholder="https://"
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  >
                    Facebook{" "}
                    <span className={classes.labelOptional}>(optional)</span>
                  </CustomFormInput>
                </Grid>

                <Grid item xs={12} md={4}>
                  <CustomFormInput
                    name="store_facetime"
                    placeholder="+49"
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  >
                    Facetime{" "}
                    <span className={classes.labelOptional}>(optional)</span>
                  </CustomFormInput>
                </Grid>
                <Grid item xs={12} md={4}>
                  <CustomFormInput
                    name="store_skype"
                    placeholder="https://"
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  >
                    Skype{" "}
                    <span className={classes.labelOptional}>(optional)</span>
                  </CustomFormInput>
                </Grid>
                <Grid item xs={12} md={4}>
                  <CustomFormInput
                    name="store_twitter"
                    placeholder="https://"
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  >
                    Twitter{" "}
                    <span className={classes.labelOptional}>(optional)</span>
                  </CustomFormInput>
                </Grid>
              </Grid>
              <Grid container spacing={3} className={classes.picturesContainer}>
                <Grid item xs={12} className={classes.picturesIntroduction}>
                  <Typography variant="h2" gutterBottom={true}>
                    Fotos und Videos
                  </Typography>
                  <Typography variant="body1" gutterBottom={true}>
                    Jetzt geht es um dich und deinen Laden! Je mehr verschiedene
                    Produkte du deinen Kunden zeigen kannst, um so besser
                    verstehen sie, was du verkaufst - und um so wahrscheinlicher
                    ist es, dass sie dich kontaktieren um noch mehr über dein
                    Angebot zu erfahren.
                    <br />
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="h3" gutterBottom={true}>
                    Nochmal zu dir...
                  </Typography>
                  <Typography variant="body2" gutterBottom={true}>
                    Zeig dich auf deinem Profil doch von deiner besten Seite.
                    Hier kannst du ein Foto von dir hochladen, damit deine
                    Kunden auch wissen, mit wem Sie es zu tun haben. Ansonsten
                    kannst Du hier auch das Interieur deines Ladens hochladen.
                    <br />
                    <br />
                  </Typography>
                  <CustomFormInput
                    name="store_ownerimage"
                    placeholder=""
                    type="file"
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    required={true}
                  >
                    Dein Foto
                  </CustomFormInput>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="h3" gutterBottom={true}>
                    Und jetzt dein Laden...
                  </Typography>
                  <Typography variant="body2" gutterBottom={true}>
                    Die Leute in deiner Nachbarschaft kennen deinen Laden - und
                    besonders von außen. Lad hier ein Foto von deiner Ladenfront
                    hoch um den Wiedererkennungswert zu erhöhen.
                    <br />
                    <br />
                    <br />
                  </Typography>
                  <CustomFormInput
                    name="store_image"
                    placeholder=""
                    type="file"
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    required={true}
                  >
                    Foto des Ladens (vorzugsweise die Ladenfront)
                  </CustomFormInput>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="h3" gutterBottom={true}>
                    Video
                  </Typography>
                  <Typography variant="body2" gutterBottom={true}>
                    Füge einen Link zu einem kurzen Video über deinen Laden
                    hinzu (ca 1 Minute).
                    <br />
                    <br />
                    <br />
                  </Typography>
                  <CustomFormInput
                    name="store_video"
                    placeholder="https://"
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  >
                    Link zu einem kurzen Video{" "}
                    <span className={classes.labelOptional}>(optional)</span>
                  </CustomFormInput>
                </Grid>
              </Grid>

              <Grid container spacing={3} className={classes.productsContainer}>
                <Grid item xs={12} className={classes.productsIntroduction}>
                  <Typography variant="h2" gutterBottom={true}>
                    Produkte
                  </Typography>
                  <Typography variant="body1" gutterBottom={true}>
                    Wenn du willst, kannst du uns hier Produkte mitgeben, die in
                    deinem Laden zu sehen sind.
                    <br />
                  </Typography>
                </Grid>

                <FieldArray
                  name="products"
                  render={(arrayHelpers) => (
                    <>
                      {values.products.map((product, index) => (
                        <Grid
                          container
                          item
                          spacing={3}
                          xs={12}
                          md={4}
                          key={index}
                          alignContent="space-around"
                        >
                          <Grid item xs={6}>
                            <Typography variant="h4" gutterBottom={true}>
                              Produkt {index + 1}
                            </Typography>
                          </Grid>
                          <Grid item xs={6}>
                            <Button
                              onClick={() => arrayHelpers.remove(index)}
                              endIcon={
                                <SvgIcon>
                                  <TrashIcon />
                                </SvgIcon>
                              }
                              fullWidth={true}
                              size="small"
                            >
                              Löschen
                            </Button>
                          </Grid>
                          <Grid item xs={12}>
                            <CustomFormInput
                              name={`products[${index}].image`}
                              placeholder=""
                              type="file"
                              values={values}
                              errors={errors}
                              touched={touched}
                              handleChange={(e: Event) => {
                                previewHandler(
                                  e,
                                  `products[${index}].image.preview`,
                                  handleChange
                                );
                              }}
                              handleBlur={handleBlur}
                              required={true}
                            >
                              Foto
                            </CustomFormInput>
                          </Grid>
                          <Grid item xs={12}>
                            <div className={classes.productsImagePreview}>
                              <img
                                id={`products[${index}].image.preview`}
                                style={{
                                  margin: "0 auto",
                                  height: 150,
                                }}
                              />
                            </div>
                          </Grid>
                          <Grid item xs={12}>
                            <CustomFormInput
                              name={`products[${index}].name`}
                              placeholder="Handtuch"
                              values={values}
                              errors={errors}
                              touched={touched}
                              handleChange={handleChange}
                              handleBlur={handleBlur}
                              required={true}
                            >
                              Name
                            </CustomFormInput>
                          </Grid>

                          <Grid item xs={12}>
                            <CustomFormInput
                              name={`products[${index}].description`}
                              placeholder="..."
                              values={values}
                              errors={errors}
                              touched={touched}
                              handleChange={handleChange}
                              handleBlur={handleBlur}
                              multiline={true}
                              required={true}
                            >
                              Beschreibung
                            </CustomFormInput>
                          </Grid>
                          <Grid item xs={12}>
                            <CustomFormInput
                              name={`products[${index}].price`}
                              placeholder="9.99"
                              values={values}
                              errors={errors}
                              touched={touched}
                              handleChange={handleChange}
                              handleBlur={handleBlur}
                              required={true}
                            >
                              Preis
                            </CustomFormInput>
                          </Grid>
                        </Grid>
                      ))}

                      <Grid item xs={12} md={4}>
                        <Button
                          variant="contained"
                          disableElevation={true}
                          onClick={() =>
                            arrayHelpers.push({
                              image: undefined,
                              name: "",
                              description: "",
                              price: 0.0,
                            })
                          }
                        >
                          Produkt hinzufügen
                        </Button>
                      </Grid>
                    </>
                  )}
                />

                <Grid item xs={6} md={9}></Grid>
                <Grid item xs={6} md={3}>
                  <CustomButtonHighlight
                    type="submit"
                    fullWidth={true}
                    disableFocusRipple={true}
                    disableRipple={true}
                    disabled={isSubmitting || !isValid}
                  >
                    Registrieren
                  </CustomButtonHighlight>
                </Grid>
              </Grid>
            </form>
          );
        }}
      </Formik>
    </Container>
  );
};
