import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { NETFLIX_LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User Signed up and signed in

        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // This return will be called when component unmounts

    return () => unsubscribe();
  }, []);

  return (
    <>
      <div className="fixed w-screen z-50 flex justify-between items-center bg-gradient-to-b from-black">
        <div>
          <img src={NETFLIX_LOGO} alt="netflix-logo" className="w-48" />
        </div>

        {user && (
          <div className="flex items-center gap-4">
            <img
              src={user?.photoURL}
              alt="ts-icon"
              className="w-16 rounded-lg"
            />

            <button
              onClick={handleSignOut}
              className="bg-red-600 text-white px-3 py-1 mr-8 rounded-lg shadow-md"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
