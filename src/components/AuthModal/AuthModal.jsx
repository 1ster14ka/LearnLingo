import useAuthModal from "../../hooks/useAuthModal";
import LoginForm from "../LoginForm/LoginForm";

import closeIcon from "../../assets/closeIcon.svg";

import s from "./AuthModal.module.css";
import { useEffect } from "react";
import RegisterForm from "../RegisterForm/RegisterForm";

const AuthModal = () => {
  const { authModal, closeAuthModal } = useAuthModal();

  useEffect(() => {
    if (!authModal) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeAuthModal();
      }
    };
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [authModal, closeAuthModal]);

  if (!authModal) return null;
  const closeModalBackdrop = () => {
    closeAuthModal();
  };

  return (
    <div className={s.modal} onClick={closeModalBackdrop}>
      <div className={s.overlay} onClick={(event) => event.stopPropagation()}>
        <button onClick={closeAuthModal} className={s.btn} type="button">
          <img src={closeIcon} alt="" className={s.closeIcon} />
        </button>
        {authModal === "login" && <LoginForm />}
        {authModal === "register" && <RegisterForm />}
      </div>
    </div>
  );
};

export default AuthModal;
