import useAuthModal from "../../hooks/useAuthModal";

import s from "./Register.module.css";

const Register = () => {
  const { openAuthModal } = useAuthModal();

  return (
    <>
      <button
        type="button"
        className={s.register}
        onClick={() => openAuthModal("register")}
      >
        Registration
      </button>
    </>
  );
};

export default Register;
