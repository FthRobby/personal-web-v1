import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import {
    AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn,FaHeart } from "react-icons/fa";
import {GiCoffeeCup} from "react-icons/gi";

function Footer() {
    let date = new Date();
    let year = date.getFullYear();
    return (
      <Container fluid className="footer">
        <Row>
        <Col md="4" className="footer-copywright">
            <h3>Made with <FaHeart style={{ color: "purple" }} /> and <GiCoffeeCup style={{ color: "brown"}} /> </h3>
          </Col>
          
          <Col md="4" className="footer-copywright">
            <h3>Copyright © {year} FthRobby</h3>
          </Col>
          <Col md="4" className="footer-body">
            <ul className="footer-icons">

              <li className="social-icons">
                <a
                  href="https://github.com/fthrobby"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/fatah-robbysalam-5943b7217/"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.instagram.com/f.robby_/"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <AiFillInstagram />
                </a>
              </li>

              <li className="social-icons">
                <p className="text-white">
                  design by : 
                  <a
                  className="text-decoration-none"
                  href="https://github.com/soumyajit4419"
                  style={{ color: "purple" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                > Soumyajit Behera</a>
                </p> 
              </li>

              
            </ul>
          </Col>
        </Row>
      </Container>
    );
  }
  
export default Footer;
