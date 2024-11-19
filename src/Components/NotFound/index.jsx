import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import { PrimaryButton } from "../Buttons";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Container className="page-header">
      <Row>
        <Col className="borderRight text-center"></Col>
        <Col className="errorPageContent">
          <div>
            <h1>404 error!</h1>
            <h3>Sorry! The page you're looking for cannot be found.</h3>
            <p>
              Either something went wrong or the page doesn't exists anymore.
            </p>
            <PrimaryButton onClick={() => navigate("/")}>
              Go to Home
            </PrimaryButton>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
