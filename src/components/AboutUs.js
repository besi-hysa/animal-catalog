import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import Pic1 from "../assets/photo1.jpg";
import Pic2 from "../assets/photo2.jpg";
import Pic3 from "../assets/pic3.jpg";
import Pic4 from "../assets/p.jpg";
import "./about.css";

const teamMembers = [
  {
    name: "John Doe",
    role: "Founder & CEO",
    image: Pic2,
    description:
      "John is passionate about animals and founded this company to help pets find loving homes.",
  },
  {
    name: "Jane Smith",
    role: "Chief Veterinarian",
    image: Pic4,
    description:
      "Jane has over 20 years of experience in veterinary care and ensures all pets are healthy.",
  },
  {
    name: "Alice Johnson",
    role: "Adoption Specialist",
    image: Pic3,
    description:
      "Alice helps families find the perfect pet and guides them through the adoption process.",
  },
];
const AboutUs = () => {
  return (
    <div className="about-us-container">
      <Container className="mt-5">
        <h1 className="text-center mb-4">About Us</h1>
        <Row className="mb-5">
          <Col>
            <p>
              Welcome to Animal Catalog! We are passionate about connecting
              people with the perfect pets for their homes. Our team is
              dedicated to providing accurate and helpful information about a
              wide variety of animals, including cats, dogs, and birds.
            </p>
            <p>
              Our mission is to promote the adoption and care of pets by
              offering a user-friendly platform where you can explore different
              types of animals and learn about their unique characteristics and
              needs. We believe every pet deserves a loving home, and we are
              here to help you find the perfect companion.
            </p>
            <p>
              Thank you for visiting our site. We hope you find your perfect
              pet!
            </p>
          </Col>
          <Col>
            <Image src={Pic1} alt="Our Team" rounded fluid />
          </Col>
        </Row>

        <h2 className="text-center mb-4">Our Mission</h2>
        <Row className="text-center mb-5">
          <Col md={4}>
            <Image src="/images/mission1.jpg" roundedCircle fluid />
            <h3>Adopt</h3>
            <p>We help you find the perfect pet for your home.</p>
          </Col>
          <Col md={4}>
            <Image src="/images/mission2.jpg" roundedCircle fluid />
            <h3>Care</h3>
            <p>We provide resources to ensure your pet is well cared for.</p>
          </Col>
          <Col md={4}>
            <Image src="/images/mission3.jpg" roundedCircle fluid />
            <h3>Support</h3>
            <p>We offer support throughout the adoption process and beyond.</p>
          </Col>
        </Row>

        <h2 className="text-center mb-4">Meet Our Team</h2>
        <Row>
          {teamMembers.map((member, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="h-100">
                <Card.Img variant="top" src={member.image} />
                <Card.Body>
                  <Card.Title>{member.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {member.role}
                  </Card.Subtitle>
                  <Card.Text>{member.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
