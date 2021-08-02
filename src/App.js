import { React, useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user-actions";
import "./App.css";

import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/Shop/ShopPage";
import Header from "./components/Header/Header";
import SignInAndSignUpPage from "./pages/SignInAndSignUpPage/SignInAndSignUpPage";
import { auth, createUserProfileDocument } from "./firebase/firebase";

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
    const [user, setUser] = useState({
      currentUser: null,
    });

    useEffect(() => {
      // no need for ref here
      const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);

          userRef.onSnapshot((snapShot) => {
            setUser({
              currentUser: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            });
          });
        } else {
          setUser({ currentUser: userAuth });
        }
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
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/sign-in" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return { setCurrentUser: (user) => dispatch(setCurrentUser(user)) };
}

export default connect(null, mapDispatchToProps)(App);
