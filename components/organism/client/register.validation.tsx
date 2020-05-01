import * as Yup from "yup";

export default Yup.object({
  store_name: Yup.string().required(),
  store_zipcode: Yup.number().min(2).required(),
  store_street: Yup.string().min(5).required(),
  store_streetnr: Yup.string().min(5).required(),
  store_city: Yup.string().required(),
  store_description: Yup.string().required(),
  store_openinghours: Yup.string().required(),
  store_members: Yup.number().min(1).required(),
  store_email: Yup.string().email().required(),
  store_instagram: Yup.string().url(),
  store_twitter: Yup.string().url(),
  store_facebook: Yup.string().url(),
  store_phone: Yup.string().min(2).required(),
  store_whatsapp: Yup.string().min(2).required(),
  store_website: Yup.string().min(2).required(),
  store_facetime: Yup.string().min(2).required(),
  store_category: Yup.string().required(),
  store_ownerimage: Yup.mixed(),
  store_image: Yup.string().url(),
  store_video: Yup.string(),
  store_pickup: Yup.boolean(),
  store_delivery: Yup.boolean(),
  store_shipping: Yup.boolean(),
  firstname: Yup.string().required(),
  lastname: Yup.string().required(),
  phone: Yup.string().min(2).required(),
  email: Yup.string().required(),
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
