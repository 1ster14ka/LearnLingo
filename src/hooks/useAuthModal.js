import { useContext } from "react";
import AuthContext from "../context/AuthContext/AuthContext";

const useAuthModal = () => {
  return useContext(AuthContext);
};

export default useAuthModal;
