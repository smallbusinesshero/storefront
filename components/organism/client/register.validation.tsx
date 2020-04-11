import * as Yup from "yup"

export default Yup.object({
    store_name: Yup.string().required(),
    store_zipcode: Yup.number().min(2).required(),
    store_address: Yup.string().min(5).required(),
    store_city: Yup.string().required(),
    store_description: Yup.string().required(),
    store_email: Yup.string().email().required(),
    store_instagram: Yup.string().url(),
    store_twitter: Yup.string().url(),
    store_facebook: Yup.string().url(),
    store_category: Yup.string().required(),
    store_image: Yup.mixed(),
    firstname: Yup.string().required(),
    lastname: Yup.string().required(),
    email: Yup.string().required(),
    email_repeat: Yup.string().required().oneOf([Yup.ref('email'), null]),
    password: Yup.string().required(),
    password_repeat: Yup.string().required().oneOf([Yup.ref('password'), null]),
});