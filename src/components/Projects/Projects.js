import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import todoapp from "../../Assets/Projects/todo-app.png";
import vuecalc from "../../Assets/Projects/vue-calc.png";
import crudphpnative from "../../Assets/Projects/crud-php-native.png";
import crudlaravel from "../../Assets/Projects/crud-laravel.png";
import pinjol from "../../Assets/Projects/simulasi-pinjol.png";
import reactlanding from "../../Assets/Projects/react-landing.png";
import vuemovie from "../../Assets/Projects/vue-movie.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
       
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todoapp}
              isBlog={false}
              title="Vue Todo-App"
              description="Todo app, built using Vue.js and Bootstrap. Has basic CRUD features and with a minimalist design."
              link="https://github.com/FthRobby/Todo-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vuecalc}
              isBlog={false}
              title="Vue Calculator"
              description="This calculator application is built using javascript and the Vue.js framework, using javascript arithmetic logic operations."
              link="https://github.com/FthRobby/Vue-Calculator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crudphpnative}
              isBlog={false}
              title="CRUD PHP Native"
              description="Simple crud application using pure php language and bootstrap 4."
              link="https://github.com/FthRobby/crud-php-native"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crudlaravel}
              isBlog={false}
              title="CRUD Laravel with AdminLTE"
              description="CRUD application using PHP language with Laravel 8 framework and user integration using AdminLTE3. There are several user tables in it."
              link="https://github.com/FthRobby/web-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reactlanding}
              isBlog={false}
              title="React Landing Page"
              description="This landing page was created using React.js. This landing page is very simple and still under development, because I created it by looking at online tutorials."
              link="https://fthrobby.github.io/sample-react-landing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pinjol}
              isBlog={false}
              title="Online Money Loan"
              description="Online loan application. created using the Kotlin programming language. This application is still in the development stage."
              link="https://github.com/FthRobby/NganJoekDoeloe"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vuemovie}
              isBlog={false}
              title="Vue Movie"
              description="This application is made using Vue.js. This app use fetch Api from OMDB API. This app is still in the development stage."
              link="https://github.com/FthRobby/app-vue"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
