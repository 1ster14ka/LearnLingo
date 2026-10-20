import { ErrorMessage, Field } from "formik";
import { useState } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";

import s from "./PasswordField.module.css";

const PasswordField = ({ name, placeholder }) => {
  const [isOpenEye, setIsOpenEye] = useState(false);

  const toggleEye = () => {
    setIsOpenEye((prev) => !prev);
  };

  return (
    <div>
      <div className={s.passwordWrapper}>
        <button
          type="button"
          className={s.btnEye}
          onClick={toggleEye}
          onMouseDown={(e) => e.preventDefault()}
        >
          {isOpenEye ? (
            <FaRegEye className={s.iconEye} />
          ) : (
            <FaRegEyeSlash className={s.iconEye} />
          )}
        </button>
        <Field
          name={name}
          type={isOpenEye ? "text" : "password"}
          placeholder={placeholder}
          className={s.input}
        />
      </div>
      <ErrorMessage name={name} component="span" className={s.error} />
    </div>
  );
};

export default PasswordField;
