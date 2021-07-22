import { React, useState } from "react";
import "./SignIn.scss";

import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";

import { signInWithGoogle, auth } from "../../firebase/firebase";
function SignIn() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  function handleEmailChange(event) {
    setUserEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setUserPassword(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(userEmail, userPassword);
    } catch (error) {
      console.log(error);
    }

    setUserEmail("");
    setUserPassword("");
  }

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={userEmail}
          label="Email"
          required
          onChange={handleEmailChange}
        />

        <FormInput
          name="password"
          type="password"
          value={userPassword}
          label="Password"
          onChange={handlePasswordChange}
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
