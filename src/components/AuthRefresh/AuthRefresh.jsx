import { useDispatch, useSelector } from "react-redux";
import { tokenExpirationTimeSelect, userSelect } from "../redux/Auth/selectors";
import { useEffect } from "react";
import { refreshToken } from "../redux/Auth/operation";

const AuthRefresh = () => {
  const tokenExpirationTime = useSelector(tokenExpirationTimeSelect);
  const user = useSelector(userSelect);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user?.refreshToken || !tokenExpirationTime) {
      return;
    }
    const refreshBeforeExpiration = 5 * 60 * 1000;
    const delay = tokenExpirationTime - Date.now() - refreshBeforeExpiration;
    const idTimer = setTimeout(
      () => {
        dispatch(refreshToken(user.refreshToken));
      },
      Math.max(delay, 0),
    );
    return () => {
      clearTimeout(idTimer);
    };
  }, [tokenExpirationTime, dispatch, user?.refreshToken]);
  return <></>;
};

export default AuthRefresh;
