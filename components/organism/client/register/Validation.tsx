import * as Yup from "yup";

const MAX_FILE_SIZE = 2e6; // 2 MB
const ALLOWED_UPLOAD_FILE_TYPES = ["image/jpg", "image/jpeg", "image/png"];

export default Yup.object({
  firstname: Yup.string().required(),
  lastname: Yup.string().required(),
  store_name: Yup.string().required(),
  store_street: Yup.string().required(),
  store_streetnr: Yup.string().required(),
  store_zipcode: Yup.number().min(4).required(),
  store_city: Yup.string().required(),
  store_description: Yup.string().required(),
  store_category: Yup.string().required(),
  store_members: Yup.number().required(),
  phone: Yup.string().required(),
  email: Yup.string().email().required(),
  store_openinghours: Yup.string(),
  store_pickup: Yup.boolean(),
  store_delivery: Yup.boolean(),
  store_shipping: Yup.boolean(),
  store_phone: Yup.string(),
  store_email: Yup.string().email(),
  store_whatsapp: Yup.string(),
  store_website: Yup.string().url(),
  store_instagram: Yup.string().url(),
  store_facebook: Yup.string().url(),
  store_facetime: Yup.string(),
  store_skype: Yup.string().url(),
  store_twitter: Yup.string().url(),
  store_ownerimage: Yup.mixed()
    .required()
    .test("fileSize", "Your image is too big", (value) => {
      return value && value.size <= MAX_FILE_SIZE;
    })
    .test("fileType", "Your image format is not allowed", (value) => {
      return value && ALLOWED_UPLOAD_FILE_TYPES.includes(value.type);
    }),
  store_image: Yup.mixed()
    .required()
    .test("fileSize", "Your image is too big", (value) => {
      return value && value.size <= MAX_FILE_SIZE;
    })
    .test("fileType", "Your image format is not allowed", (value) => {
      return value && ALLOWED_UPLOAD_FILE_TYPES.includes(value.type);
    }),
  store_video: Yup.string().url(),
  products: Yup.array()
    .of(
      Yup.object().shape({
        name: Yup.string().required(),
        description: Yup.string().required(),
        price: Yup.number().min(1).required(),
        image: Yup.mixed()
          .required()
          .test("fileSize", "Your image is too big", (value) => {
            if (!value) return true; // required will fail in this case
            return value && value.size <= MAX_FILE_SIZE;
          })
          .test("fileType", "Your image format is not allowed", (value) => {
            if (!value) return true; // required will fail in this case
            return value && ALLOWED_UPLOAD_FILE_TYPES.includes(value.type);
          }),
        preview: Yup.string(),
      })
    )
    .min(3)
    .max(30)
    .required(),
  // password: Yup.string().required(),
  // password_repeat: Yup.string()
  //   .required()
  //   .oneOf([Yup.ref("password"), null]),
});
