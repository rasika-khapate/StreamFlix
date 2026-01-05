import React from "react";

const checkValidate = (email, password) => {
 
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    );



  switch (true) {
    case !isEmailValid && !isPasswordValid:
      return "Your email and password are invalid";
    case !isEmailValid:
      return "Your email is Invalid! Please enter a valid email address.";
    case !isPasswordValid:
      return "Your password is Invalid! - Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.";
    default:
      return null;
  }
};

export default checkValidate;
