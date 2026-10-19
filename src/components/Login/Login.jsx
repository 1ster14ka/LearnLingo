import loginSvg from "../../assets/login.svg";
import useAuthModal from "../../hooks/useAuthModal";

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
        <img src={loginSvg} alt="login" className={s.img} />
        <span>Login</span>
      </button>
    </>
  );
};

export default Login;
