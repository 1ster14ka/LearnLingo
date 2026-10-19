import { useCallback, useState } from "react";
import AuthContext from "../AuthContext/AuthContext";

const AuthProvider = ({ children }) => {
  const [authModal, setAuthModal] = useState(null);
  const openAuthModal = useCallback((type = "login") => {
    setAuthModal(type);
  }, []);
  const closeAuthModal = useCallback(() => {
    setAuthModal(null);
  }, []);

  return (
    <AuthContext.Provider value={{ authModal, openAuthModal, closeAuthModal }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
