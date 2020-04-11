import * as Yup from "yup"

export default Yup.object({
    email: Yup.string().required(),
    password: Yup.string().required(),
});