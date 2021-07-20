import { React, Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/Shop/ShopPage";
import Header from "./components/Header/Header";
import SignInPage from "./pages/SignInPage/SignInPage";
import { auth } from "./firebase/firebase";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/sign-in" component={SignInPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
