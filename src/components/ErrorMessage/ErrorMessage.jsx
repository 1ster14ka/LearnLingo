import s from "./ErrorMessage.module.css";

const ErrorMessage = ({ message }) => {
  return (
    <>
      <img src={`/images/sad-girl.png`} alt="" className={s.image} />
      <p className={s.errorMessage}>{message}</p>
    </>
  );
};

export default ErrorMessage;
