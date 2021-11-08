import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Fatah RobbySalam </span>
            from <span className="purple"> Subang, JawaBarat</span>
            <br />I am a student of UTDI (Universitas Teknologi Digital indonesia) in Yogyakarta.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Work hard yes, Pray hard yes!"{" "}
          </p>
          <footer className="blockquote-footer">FthRobby</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
