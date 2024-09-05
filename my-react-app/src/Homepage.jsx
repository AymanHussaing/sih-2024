import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Homepage.css'; // Import custom CSS
import { Carousel, Navbar, Nav, Button, Container, Row, Col } from 'react-bootstrap';

const Homepage = () => {
  return (
    <div className="homepage">
      {/* Header */}
      <Navbar bg="success" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              src="logo4.png"
              width="100"
              height="50"
              className="d-inline-block align-top"
              alt="Mithra logo"
            />
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Button variant="outline-light">Sign in / Sign up</Button>
          </Nav>
        </Container>
      </Navbar>
      {/* Description */}
      <Container fluid className="my-5 about-section">
        <Row>
          <Col>
            <h2 className="text-success">About Mithra</h2>
            <p>
              Welcome to MITHRA, a comprehensive platform that streamlines contracts and transactions between farmers and buyers. Our site features advanced tools like chatbot integration for seamless communication, audio-to-text and text-to-audio converters for accessible messaging, and real-time market trend analysis to ensure farmers receive fair prices. Additionally, we offer automatic contract drafting and secure transactions, providing peace of mind and efficiency in every deal. Join us to elevate your agricultural business with cutting-edge technology.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Carousel */}
      <Container fluid>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="sappling.webp"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="landcrop.jpeg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="farmingland.jpeg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="contract.webp"
              alt="Fourth slide"
            />
          </Carousel.Item>
        </Carousel>
      </Container>

      {/* Footer */}
      <footer className="bg-success text-white text-center text-lg-start mt-5">
        <Container fluid className="p-4">
          <Row>
            <Col lg="6" md="12" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">Opening times</h5>
              <p>
                <span>Monday—Saturday: 9:00 am— 4:10 pm</span><br />
                <span>1st Saturday: Holiday </span>
              </p>
            </Col>
            <Col lg="6" md="12" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">College Contact Info</h5>
              <p>
                <span>Gandipet, Hyderabad, Telangana,</span><br />
                <span>PIN: 500075</span><br />
                <span>Phone: 040-24193276</span><br />
                <span>Mobile: 8466997201</span><br />
                <span>For Admissions Enquiry: 8466997216</span><br />
                <span>Email: principal@cbit.ac.in </span>
              </p>
            </Col>
          </Row>
        </Container>
        <div className="text-center p-3 bg-dark text-white">
          © 2024 Mithra. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Homepage;