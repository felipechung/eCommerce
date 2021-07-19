import { React, useState } from "react";
import "./SignIn.scss";

function SignIn() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  function handleEmailChange(event) {
    setUserEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setUserPassword(event.target.value);
  }

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          setUserEmail("");
          setUserPassword("");
          console.log([userEmail, userPassword]);
        }}
      >
        <input
          name="email"
          type="email"
          value={userEmail}
          required
          onChange={handleEmailChange}
        />
        <label>Email</label>
        <input
          name="password"
          type="password"
          value={userPassword}
          onChange={handlePasswordChange}
          required
        />
        <label>Password</label>
        <input type="submit" value="Submit Form" />
      </form>
    </div>
  );
}

export default SignIn;
