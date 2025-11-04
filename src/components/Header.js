import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { NETFLIX_LOGO } from "../utils/constants";
import { GPTSearchToggle } from "../redux/GPTSearchSlice";
import { supported_languages } from "../utils/languageConstants";
import { changeLanguage } from "../redux/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const showGPTSearch = useSelector((store) => store.GPT.showGPTSearch);

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

  const handleGPTSearchToggle = () => {
    dispatch(GPTSearchToggle());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <>
      <div className="fixed w-full z-50 flex justify-between items-center bg-gradient-to-b from-black">
        <div>
          <img src={NETFLIX_LOGO} alt="netflix-logo" className="w-48" />
        </div>

        {user && (
          <div className="flex items-center gap-4">
            {showGPTSearch && (
              <select
                className="px-3 py-1 bg-gray-900 text-white"
                onChange={handleLanguageChange}
              >
                {supported_languages.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
            <button
              className="bg-purple-800 text-white px-3 py-1.5 rounded-lg shadow-md"
              onClick={handleGPTSearchToggle}
            >
              {showGPTSearch ? "Go To Homepage" : "GPT Search"}
            </button>
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
