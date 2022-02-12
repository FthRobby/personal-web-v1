import React from "react";
import Card from "react-bootstrap/Card";
import { FiPlay } from "react-icons/fi";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="purple">Fatah RobbySalam </span>
            from <span className="purple"> Subang, JawaBarat.</span>
            <br />I am a student of UTDI (Universitas Teknologi Digital indonesia) in Yogyakarta.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <FiPlay /> Cycling
            </li>
            <li className="about-activity">
              <FiPlay /> Playing Game
            </li>
            <li className="about-activity">
              <FiPlay /> Watch Movie
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
