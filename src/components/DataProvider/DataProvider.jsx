import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSelect } from "../redux/Auth/selectors";
import {
  getFavoritesTeachers,
  getTeachers,
} from "../redux/Teachers/operations";

const DataProvider = () => {
  const user = useSelector(userSelect);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTeachers());
  }, [dispatch]);

  useEffect(() => {
    if (user?.localId && user?.idToken) {
      dispatch(
        getFavoritesTeachers({
          localId: user.localId,
          idToken: user.idToken,
        }),
      );
    }
  }, [dispatch, user?.localId, user?.idToken]);

  return null;
};

export default DataProvider;
