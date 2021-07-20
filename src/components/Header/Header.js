import React from "react";
import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./Header.scss";

function Header({ currentUser }) {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link className="option" to="/contact">
          Contact
        </Link>
        {currentUser ? (
          <div
            className="option"
            onClick={() => {
              auth
                .signOut()
                .then(() => {
                  // Sign-out successful.
                })
                .catch((error) => {
                  // An error happened.
                });
            }}
          >
            Sign Out
          </div>
        ) : (
          <Link className="option" to="/sign-in">
            Sign in
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
