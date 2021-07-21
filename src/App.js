import { React, useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/Shop/ShopPage";
import Header from "./components/Header/Header";
import SignInPage from "./pages/SignInPage/SignInPage";
import { auth } from "./firebase/firebase";

function App() {
  // constructor() {
  //   super();

  //   this.state = {
  //     currentUser: null,
  //   };
  // }
  // unsubscribeFromAuth = null;
  // componentDidMount() {
  //   this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
  //     this.setState({ currentUser: user });
  //   });
  // }

  // componentWillUnmount() {
  //   this.unsubscribeFromAuth();
  // }

  function useAuthUser() {
    const [user, setUser] = useState(null);

    useEffect(() => {
      // no need for ref here
      const unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
        setUser(user);
      });

      return () => {
        unsubscribeFromAuth();
      };
    }, []);

    return user; // return authenticated user
  }

  const user = useAuthUser();

  return (
    <div>
      <Header currentUser={user} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/sign-in" component={SignInPage} />
      </Switch>
    </div>
  );
}

export default App;
