import * as Yup from "yup";

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
  store_ownerimage: Yup.mixed().required(),
  store_image: Yup.string().required(),
  store_video: Yup.string().url(),
  products: Yup.array()
    .of(
      Yup.object().shape({
        name: Yup.string().required(),
        description: Yup.string().required(),
        price: Yup.number().min(1).required(),
        image: Yup.mixed().required(),
      })
    )
    .min(3)
    .required(),
  // password: Yup.string().required(),
  // password_repeat: Yup.string()
  //   .required()
  //   .oneOf([Yup.ref("password"), null]),
});
