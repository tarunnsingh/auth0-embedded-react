import React, { useEffect, useState, useContext } from "react";
import {
  Button,
  Form,
  Container,
  Row,
  Col,
  Alert,
  Spinner,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { useHistory } from "react-router-dom";
import AuthService from "../../services/AuthService";
// import { AuthContext } from "../../context/AuthContext";
import { useMockContext } from "../../context/AuthContext";

const Login = (props) => {
  const [user, setNewUser] = useState({ username: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [displayMsg, setDisplayMsg] = useState(null);
  const [alertClass, setAlertClass] = useState("primary");
  // const { setIsAuthenticated, setUser } = useContext(AuthContext);
  const { setIsAuthenticated, setUser } = useMockContext();

  const history = useHistory();

  // useEffect(() => {
  //   resetForm();
  // }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    let { message } = await AuthService.login(user.username, user.password);
    if (message.msgError) {
      setAlertClass("danger");
      setDisplayMsg(message.message);
      setTimeout(() => {
        resetForm();
        setIsLoading(false);
        setDisplayMsg(null);
      }, 3000);
      setIsLoading(false);
      resetForm();
    } else {
      setIsAuthenticated(true);
      setAlertClass("success");
      setUser(await AuthService.getUserProfile());
      setDisplayMsg(message.message);
      setTimeout(() => {
        resetForm();
        setIsLoading(false);
        setDisplayMsg(null);
        // history.push("/user");
      }, 3000);
    }
  };

  const handleInputChange = (e) => {
    setNewUser({ ...user, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setNewUser({ username: "", password: "" });
    setIsLoading(false);
  };

  return (
    <Container fluid>
      <Row>
        <Col></Col>
        <Col xs={6}>
          <h3 className="text-center mt-3 display-4">Login</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                data-testid="emailInput"
                type="email"
                name="username"
                id="emailInput"
                value={user.username}
                placeholder="Enter your Email..."
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={user.password}
                placeholder="Enter Password..."
                onChange={handleInputChange}
              />
            </Form.Group>
            <Button
              type="submit"
              variant="primary"
              className="text-center"
              disabled={isLoading}
            >
              {isLoading && (
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              )}{" "}
              <span>Login</span>
            </Button>
          </Form>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col>
          {" "}
          {displayMsg && (
            <Alert className="mt-3" variant={alertClass}>
              {displayMsg}
            </Alert>
          )}
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Login;
