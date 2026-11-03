import { ErrorMessage, Field, Form, Formik } from "formik";

import * as Yup from "yup";

import s from "./LoginForm.module.css";
import PasswordField from "../PasswordField/PasswordField";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/Auth/operation";
import iziToast from "izitoast";
import useAuthModal from "../../hooks/useAuthModal";
import { getLoginErrorMessage } from "../../constants/errorMessage";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Must be a valid email!").required("Required"),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum."),
});

const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const dispatch = useDispatch();
  const { closeAuthModal } = useAuthModal();

  const handleSubmit = async (values, actions) => {
    try {
      await dispatch(
        loginUser({ ...values, returnSecureToken: true }),
      ).unwrap();
      closeAuthModal();
      actions.resetForm();
    } catch (error) {
      iziToast.error({
        title: "Login error",
        message: getLoginErrorMessage(error),
        position: "topRight",
      });
      return;
    }
  };

  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Log In</h2>
      <p className={s.text}>
        Welcome back! Please enter your credentials to access your account and
        continue your search for a teacher.
      </p>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={LoginSchema}
      >
        <Form className={s.form}>
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
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
