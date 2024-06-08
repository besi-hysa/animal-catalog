import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Container fluid className="home-container">
        <Row className="justify-content-center align-items-center text-center">
          <Col>
            <h1>Welcome to Animal Catalog</h1>
            <p>
              Explore a wide variety of pets and find your perfect companion
              today!
            </p>
          </Col>
        </Row>
      </Container>
     
    </div>
  );
};

export default Home;
