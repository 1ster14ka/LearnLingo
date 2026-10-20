import useAuthModal from "../../hooks/useAuthModal";

import { FiLogIn } from "react-icons/fi";

import s from "./Login.module.css";

const Login = () => {
  const { openAuthModal } = useAuthModal();

  return (
    <>
      <button
        type="button"
        className={s.login}
        onClick={() => openAuthModal("login")}
      >
        <FiLogIn className={s.icon} />
        <span>Login</span>
      </button>
    </>
  );
};

export default Login;
