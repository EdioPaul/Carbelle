import React from "react";
import HomePage from "./../home";
import SigninPage from "./../signin";
import HomeEnter from "./../HomeEnter";
import SignupPage from "./../signup";
import ForgotpassPage from "./../forgotpass";
import ChangepassPage from "./../changepass";
import { Switch, Route, Router } from "./../../util/router.js";
import { ProvideAuth } from "./../../util/auth.js";
import "./styles.scss";

function App(props) {
  return (
    <ProvideAuth>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />

          <Route exact path="/signin" component={SigninPage} />

          <Route exact path="/signup" component={SignupPage} />

          <Route exact path="/forgotpass" component={ForgotpassPage} />

          <Route exact path="/changepass" component={ChangepassPage} />

          <Route exact path="/HomeEnter" component={HomeEnter} />

          <Route
            component={({ location }) => {
              return (
                <div
                  style={{
                    padding: "50px",
                    width: "100%",
                    textAlign: "center"
                  }}
                >
                  The page <code>{location.pathname}</code> could not be found.
                </div>
              );
            }}
          />
        </Switch>
      </Router>
    </ProvideAuth>
  );
}

export default App;
