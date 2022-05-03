import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import LandingPage from "./_components/views/LandingPage/LandingPage";
import LoginPage from "./_components/views/LoginPage/LoginPage";
import RegisterPage from "./_components/views/RegisterPage/RegisterPage";
import Auth from "./hoc/auth";
function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Auth(LandingPage, null)} />
        <Route exact path="/login" component={Auth(LoginPage, false)} />
        <Route exact path="/register" component={Auth(RegisterPage, false)} />
      </div>
    </Router>
  );
}
export default App;
