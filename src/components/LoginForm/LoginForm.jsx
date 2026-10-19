import { Field, Form, Formik } from "formik";

import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";

import s from "./LoginForm.module.css";
import { useState } from "react";

const LoginForm = () => {
  const [isOpenEye, setIsOpenEye] = useState(false);

  const toggleEye = () => {
    setIsOpenEye((prev) => !prev);
  };

  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Log In</h2>
      <p className={s.text}>
        Welcome back! Please enter your credentials to access your account and
        continue your search for an teacher.
      </p>
      <Formik>
        <Form className={s.form}>
          <Field
            name="email"
            type="text"
            placeholder="Email"
            className={s.input}
          />
          <label className={s.label}>
            <button type="button" className={s.btnEye} onClick={toggleEye}>
              {isOpenEye ? (
                <FaRegEye className={s.iconEye} />
              ) : (
                <FaRegEyeSlash className={s.iconEye} />
              )}
            </button>
            <Field
              name="password"
              type="password"
              placeholder="Password"
              className={s.input}
            />
          </label>
          <button className={s.btn}>Login</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
