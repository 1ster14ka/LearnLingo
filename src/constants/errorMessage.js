export const getRegisterErrorMessage = (error) => {
  switch (error) {
    case "EMAIL_EXISTS":
      return "This email is already registered.";

    case "INVALID_EMAIL":
      return "Please enter a valid email address.";

    case "WEAK_PASSWORD":
      return "Password is too weak. Use at least 8 characters.";

    case "TOO_MANY_ATTEMPTS_TRY_LATER":
      return "Too many attempts. Please try again later.";

    default:
      return "Something went wrong. Please try again.";
  }
};

export const getLoginErrorMessage = (error) => {
  switch (error) {
    case "EMAIL_NOT_FOUND":
    case "INVALID_LOGIN_CREDENTIALS":
      return "No account found with this email or password.";

    case "INVALID_PASSWORD":
      return "Incorrect password. Please try again.";

    case "INVALID_EMAIL":
      return "Please enter a valid email address.";

    case "USER_DISABLED":
      return "This account has been disabled.";

    case "TOO_MANY_ATTEMPTS_TRY_LATER":
      return "Too many attempts. Please try again later.";

    default:
      return "Unable to log in. Please check your credentials and try again.";
  }
};
