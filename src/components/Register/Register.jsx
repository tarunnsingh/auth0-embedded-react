import React, { useEffect, useState } from "react";
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

const Register = (props) => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [displayMsg, setDisplayMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [alertClass, setAlertClass] = useState("primary");
  const history = useHistory();

  useEffect(() => {
    resetForm();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    let { message } = await AuthService.register(user.email, user.password);
    console.log(message);
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
      setAlertClass("success");
      setDisplayMsg(message.message);
      setTimeout(() => {
        resetForm();
        setIsLoading(false);
        setDisplayMsg(null);
        history.push("/login");
      }, 3000);
    }
  };

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setUser({ email: "", password: "" });
    setIsLoading(false);
  };

  return (
    <Container fluid>
      <Row>
        <Col></Col>
        <Col xs={6}>
          <h3 className="text-center mt-3 display-4">Register</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={user.email}
                placeholder="Enter your Email..."
                onChange={handleInputChange}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
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
            <Button type="submit" variant="primary" disabled={isLoading}>
              {isLoading && (
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              )}{" "}
              <span>Register</span>
            </Button>
          </Form>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col>
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

export default Register;
