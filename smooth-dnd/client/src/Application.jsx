import { useContext } from 'react';
import React from "react";
import { Router } from "@reach/router";
import Copy from "./Copy"
import { UserContext } from "./providers/UserProvider"
import SignIn from "./Components/Sign-In/Sign-In"
import SignUp from "./Components/Sign-Up/Sign-Up"

import ProfilePage from "./Components/Profile-Page/Profile-Page"
import PasswordReset from "./Components/Password-Reset/Password-Reset "

function Application() {
  const user = useContext(UserContext);
  return (
        user ?
        <Copy />
      :
        <Router>
          <SignUp path="signUp" />
          <SignIn path="/" />
          <PasswordReset path = "passwordReset" />
        </Router>

  );
}
export default Application;