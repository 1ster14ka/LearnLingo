import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import s from "./RegisterForm.module.css";
import PasswordField from "../PasswordField/PasswordField";

const RegisterSchema = Yup.object().shape({
  name: Yup.string().min(2, "Too short!").required("Required"),
  email: Yup.string().email("Must be a valid email!").required("Required"),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum."),
});

const RegisterForm = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, actions) => {
    actions.resetForm();
  };

  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Registration</h2>
      <p className={s.text}>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information
      </p>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={RegisterSchema}
      >
        <Form className={s.form}>
          <label>
            <Field
              name="name"
              type="text"
              placeholder="Name"
              className={s.input}
            />
            <ErrorMessage name="name" component="span" className={s.error} />
          </label>
          <label>
            <Field
              name="email"
              type="email"
              placeholder="Email"
              className={s.input}
            />
            <ErrorMessage name="email" component="span" className={s.error} />
          </label>

          <PasswordField name="password" placeholder="Password" />

          <button type="submit" className={s.btn}>
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
