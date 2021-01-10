import React, { useContext } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { NavLink, Redirect } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const NavigationBar = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    setIsAuthenticated(false);
    <Redirect to="/" />;
  };
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Navbar.Brand href="/">Auth0 Assignment</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavLink className="nav-link nav-link-fade-up" to="/">
            Home
          </NavLink>
          {isAuthenticated ? (
            <React.Fragment>
              <NavLink className="nav-link nav-link-fade-up" to="/user">
                Profile
              </NavLink>
              <div style={{ float: "right" }}>
                <Button onClick={handleLogout}>Logout</Button>
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <NavLink className="nav-link nav-link-fade-up" to="/register">
                Register
              </NavLink>
              <NavLink className="nav-link nav-link-fade-up" to="/login">
                Login
              </NavLink>
            </React.Fragment>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
