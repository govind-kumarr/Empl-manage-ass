import * as Yup from "yup";

export const registerSchema = Yup.object({
  emp_id: Yup.string()
    .min(4)
    .max(4)
    .required("Please Enter a valid Employee Id"),
  name: Yup.string().min(4).max(25).required("Please Enter your name"),
  date_of_joining: Yup.date()
    .max(new Date().toISOString())
    .required("Please Enter a Valid date"),
  designation: Yup.string().min(2).required("Please select a designation"),
});

export const userLoginSchema = Yup.object({
  username: Yup.string().min(4).max(25).required("Please Enter your username"),
  password: Yup.string()
    .min(5)
    .max(25)
    .required("Password must be at least 5 characters"),
});
