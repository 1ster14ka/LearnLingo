import useAuthModal from "../../hooks/useAuthModal";
import LoginForm from "../LoginForm/LoginForm";

import closeIcon from "../../assets/closeIcon.svg";

import s from "./AuthModal.module.css";
import { useEffect } from "react";

const AuthModal = () => {
  const { authModal, closeAuthModal } = useAuthModal();

  useEffect(() => {
    if (!authModal) return;

    const handleKeyDown = (e) => {
      console.log("Key");

      if (e.key === "Escape") {
        closeAuthModal();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
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
        <button onClick={closeAuthModal} className={s.btn}>
          <img src={closeIcon} alt="" className={s.closeIcon} />
        </button>
        {authModal === "login" && <LoginForm />}
      </div>
    </div>
  );
};

export default AuthModal;
