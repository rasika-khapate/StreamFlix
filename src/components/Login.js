import React, { useState, useRef } from "react";
import Header from "./Header";
import checkValidate from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";
import { streamFlix_BACKGROUND_IMG, TS_USER_ICON } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };

  const handleSignButtonClick = () => {
   

    const message = checkValidate(email.current.value, password.current.value);
    
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredentials) => {
          const user = userCredentials.user;
         

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: TS_USER_ICON,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode} - ${errorMessage}`);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredentials) => {
          const user = userCredentials.user;
         
          updateProfile(user, {
            photoURL: TS_USER_ICON,
          })
            .then(() => {
              const { uid, email, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode} - ${errorMessage}`);
        });
    }
  };

  return (
    <div>
      <Header />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="md:w-4/12 w-9/12 mx-auto right-0 left-0 md:px-7 md:py-5 md:my-32 px-5 py-2  my-16 bg-black absolute text-white rounded-lg bg-opacity-70"
      >
        <h1 className="font-bold md:text-3xl text-2xl md:my-4 my-1.5">
          {isSignInForm ? "Sign in" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Enter your name here"
            className="w-full md:p-4 p-2.5 my-3  rounded-lg bg-gray-800 bg-opacity-80"
          />
        )}

        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="w-full md:p-4 p-2.5 my-3  rounded-lg bg-gray-800 bg-opacity-80"
        />
        <input
          ref={password}
          type="password"
          placeholder={isSignInForm ? "Password" : "Set up your password"}
          className="w-full md:p-4 p-2.5 my-3 rounded-lg bg-gray-800 bg-opacity-80"
        />
        <p className="text-red-600 font-bold text-lg text-center">
          {errorMessage}
        </p>
        <button
          className="w-full md:p-3 p-1.5 my-3 bg-red-600 rounded-lg"
          onClick={handleSignButtonClick}
        >
          {isSignInForm ? "Sign in" : "Sign Up"}
        </button>

        {isSignInForm && (
          <>
            <h1 className="text-xl text-center">OR</h1>
            <button className="w-full md:p-3 p-1.5 my-3 bg-gray-600 bg-opacity-80 rounded-lg">
              Use a sign-in code
            </button>
            <h2 className="text-lg text-center underline my-2">
              Forgot password?
            </h2>
          </>
        )}
        <p className="mt-4" onClick={handleSignInForm}>
          {isSignInForm ? (
            <>
              New to streamFlix?
              <span className="underline cursor-pointer"> Sign Up Now</span>
            </>
          ) : (
            <>
              Already Registered?
              <span className="underline cursor-pointer"> Sign In Now</span>
            </>
          )}
        </p>
      </form>
      <img
        src={streamFlix_BACKGROUND_IMG}
        alt="streamFlix-background"
        className="h-screen object-cover md:h-full"
      />
    </div>
  );
};

export default Login;
