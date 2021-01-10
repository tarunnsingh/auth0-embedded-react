import React from "react";
import Profile from "./components/Profile/Profile";
import Register from "./components/Register/Register";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import ProtectedRoute from "./hocs/ProtectedRoute";
import UnProtectedRoute from "./hocs/UnProtectedRoute";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <UnProtectedRoute exact path="/register" component={Register} />
          <UnProtectedRoute exact path="/login" component={Login} />
          <ProtectedRoute exact path="/user" component={Profile} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
