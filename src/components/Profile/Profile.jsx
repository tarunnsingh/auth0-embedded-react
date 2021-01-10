import React, { useState, useContext, useEffect } from "react";
import {
  Button,
  Container,
  Row,
  Col,
  Card,
  ListGroupItem,
  ListGroup,
  Spinner,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { AuthContext } from "../../context/AuthContext";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [fetchIing, setisFetching] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setisFetching(false);
    }, 2000);
  });
  return (
    <Container fluid>
      <Row>
        <Col></Col>
        <Col xs={6}>
          <h3 className="text-center mt-3 display-4">Profile</h3>
          {!fetchIing ? (
            <Card>
              <Card.Body>
                <Card.Title>Name: {user.nickname}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>
                  <strong>Email:</strong> {user.email}
                </ListGroupItem>
                <ListGroupItem>
                  <strong>Updated_at:</strong> {user.updated_at}
                </ListGroupItem>
                <ListGroupItem>
                  <strong>Email_verified:</strong> {user.email_verified}
                </ListGroupItem>
              </ListGroup>
              <Card.Img variant="left" src={user.picture} />
              <Card.Body>
                <Button variant="primary">
                  <strong>Go somewhere</strong>
                </Button>
              </Card.Body>
            </Card>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBlock: "10%",
              }}
            >
              <Spinner
                style={{
                  fontSize: "0.4rem",
                  height: "5rem",
                  width: "5rem",
                }}
                animation="border"
                variant="primary"
              />
            </div>
          )}
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Profile;
