import * as Yup from "yup";

const MAX_FILE_SIZE = 2e6; // 2 MB
const ALLOWED_UPLOAD_FILE_TYPES = ["image/jpg", "image/jpeg", "image/png"];

const ERR_MSG_REQUIRED = "Bitte fülle das hier noch aus";
const ERR_IMG_REQUIRED = "Bitte lade ein Bild hoch";
const ERR_MSG_URL = "Bitte achte auf ein gültiges URL Format";
const ERR_MSG_EMAIL = "Bitte achte auf ein gültiges E-Mail Format";
const ERR_IMG_MAX_FILESIZE = "Die Datei darf maximal 2 MB groß sein";
const ERR_IMG_WRONG_FILEFORMAT = "Es sind nur die Formate JPG & PNG erlaubt";

export default Yup.object({
  firstname: Yup.string().required("Bitte gib deinen Vornamen ein"),
  lastname: Yup.string().required("Bitte gib deinen Nachnamen ein"),
  store_name: Yup.string().required("Welchen Ladennamen dürfen wir anzeigen?"),
  store_street: Yup.string().required("In welcher Straße ist dein Laden?"),
  store_streetnr: Yup.string().required("Hausnummer?"),
  store_zipcode: Yup.number().min(4).required("Postleitzahl?"),
  store_city: Yup.string().required("Wo befindet sich dein Laden?"),
  store_description: Yup.string().required("Bitte beschreibe deinen Laden"),
  store_category: Yup.string().required("Bitte wähle eine Kategorie"),
  store_members: Yup.number().required("Wieviele Angestellte hast Du?"),
  phone: Yup.string().required("Bitte teile uns deine Telefonnummer mit"),
  email: Yup.string()
    .email(ERR_MSG_EMAIL)
    .required("Bitte teile uns deine E-Mail mit"),
  store_openinghours: Yup.string(),
  store_pickup: Yup.boolean(),
  store_delivery: Yup.boolean(),
  store_shipping: Yup.boolean(),
  store_phone: Yup.string(),
  store_email: Yup.string().email(ERR_MSG_EMAIL),
  store_whatsapp: Yup.string(),
  store_website: Yup.string().url(ERR_MSG_URL),
  store_instagram: Yup.string().url(ERR_MSG_URL),
  store_facebook: Yup.string().url(ERR_MSG_URL),
  store_facetime: Yup.string(),
  store_skype: Yup.string().url(ERR_MSG_URL),
  store_twitter: Yup.string().url(ERR_MSG_URL),
  store_ownerimage: Yup.mixed()
    .required(ERR_IMG_REQUIRED)
    .test("fileSize", ERR_IMG_MAX_FILESIZE, (value) => {
      return value && value.size <= MAX_FILE_SIZE;
    })
    .test("fileType", ERR_IMG_WRONG_FILEFORMAT, (value) => {
      return value && ALLOWED_UPLOAD_FILE_TYPES.includes(value.type);
    }),
  store_image: Yup.mixed()
    .required(ERR_IMG_REQUIRED)
    .test("fileSize", ERR_IMG_MAX_FILESIZE, (value) => {
      return value && value.size <= MAX_FILE_SIZE;
    })
    .test("fileType", ERR_IMG_WRONG_FILEFORMAT, (value) => {
      return value && ALLOWED_UPLOAD_FILE_TYPES.includes(value.type);
    }),
  store_video: Yup.string().url(ERR_MSG_URL),
  products: Yup.array()
    .of(
      Yup.object().shape({
        name: Yup.string().required("Bitte gib einen Produktnamen ein"),
        description: Yup.string().required("Bitte beschreibe dein Produkt"),
        price: Yup.number().min(1).required("Bitte gib einen Preis an"),
        image: Yup.mixed()
          .required(ERR_IMG_REQUIRED)
          .test("fileSize", ERR_IMG_MAX_FILESIZE, (value) => {
            if (!value) return true; // required will fail in this case
            return value && value.size <= MAX_FILE_SIZE;
          })
          .test("fileType", ERR_IMG_WRONG_FILEFORMAT, (value) => {
            if (!value) return true; // required will fail in this case
            return value && ALLOWED_UPLOAD_FILE_TYPES.includes(value.type);
          }),
        preview: Yup.string(),
      })
    )
    .min(3, "Es werden mindestens 3 Produkte benötigt")
    .max(30, "Es sind maximal 30 Produkte erlaubt")
    .required(ERR_MSG_REQUIRED),
  // password: Yup.string().required(),
  // password_repeat: Yup.string()
  //   .required()
  //   .oneOf([Yup.ref("password"), null]),
});
