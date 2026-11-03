export const userSelect = (state) => state.auth.user;
export const isLoggedInSelect = (state) => state.auth.isLoggedIn;
export const isErrorSelect = (state) => state.auth.error;
export const tokenExpirationTimeSelect = (state) =>
  state.auth.tokenExpirationTime;
