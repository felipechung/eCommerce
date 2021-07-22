import { React, useState } from "react";
import "./SignUp.scss";

import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";

import { auth, createUserProfileDocument } from "../../firebase/firebase";

function SignUp() {
  //   const [newUser, setNewUser] = useState({
  //     displayName: "",
  //     email: "",
  //     password: "",
  //     confirmPassword: "",
  //   });

  const [displayName, setDisplayName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userConfirmPassword, setUserConfirmPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    if (userPassword !== userConfirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        userEmail,
        userPassword
      );

      await createUserProfileDocument(user, { displayName });

      setDisplayName("");
      setUserEmail("");
      setUserPassword("");
      setUserConfirmPassword("");
    } catch (error) {
      console.error(error);
    }
  }

  function handleNameChange(event) {
    setDisplayName(event.target.value);
  }
  function handleEmailChange(event) {
    setUserEmail(event.target.value);
  }
  function handlePasswordChange(event) {
    setUserPassword(event.target.value);
  }
  function handleConfirmPasswordChange(event) {
    setUserConfirmPassword(event.target.value);
  }

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleNameChange}
          label="Display Name"
        />

        <FormInput
          type="email"
          name="email"
          value={userEmail}
          onChange={handleEmailChange}
          label="Email"
        />

        <FormInput
          type="password"
          name="password"
          value={userPassword}
          onChange={handlePasswordChange}
          label="Password"
        />

        <FormInput
          type="password"
          name="confirmPassword"
          value={userConfirmPassword}
          onChange={handleConfirmPasswordChange}
          label="Confirm Password"
        />

        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </div>
  );
}

export default SignUp;
