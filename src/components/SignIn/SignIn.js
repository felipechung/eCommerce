import { React, useState } from "react";
import "./SignIn.scss";

import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";

function SignIn() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  function handleEmailChange(event) {
    setUserEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setUserPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
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
        <CustomButton type="submit">Sign In</CustomButton>
      </form>
    </div>
  );
}

export default SignIn;
