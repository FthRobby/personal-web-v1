import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiReact,
  DiBootstrap,
} from "react-icons/di";
import {SiVueDotJs,SiLaravel} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVueDotJs />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiLaravel />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
      </Col>
    </Row>
  );
}

export default Techstack;
