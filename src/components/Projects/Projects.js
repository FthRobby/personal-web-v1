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
import mitsubishi from "../../Assets/Projects/mitsubishi-subang.png";
import travelUI from "../../Assets/Projects/travel-app-ui.png";
import travelWeb from "../../Assets/Projects/travel-app-web.png"


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
            imgPath={travelUI}
            isBlog={false}
            title="Travel App UI"
            alt="Travel App UI"
            description="User interface of the travel app for booking vacation trips"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard 
              imgPath={travelWeb}
              isBlog={false}
              title="Slicing Design Travel Web App (FrontEnd) "
              alt="Travel Web App"
              description="Layouting web based travel app design from adobe XD using HTML, SCSS and Bootstrap CSS."
              link="https://github.com/FthRobby/FrontEnd-Nomads"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard 
              imgPath={travelWeb}
              isBlog={false}
              title="Slicing Design Travel Web App (BackEnd) "
              alt="Travel Web App"
              description="Integrate laravel into travel web application. (on-going)"
              link="https://github.com/FthRobby/BackEnd-Nomads"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
            imgPath={mitsubishi}
            isBlog={false}
            title="Mitsubishi Subang"
            alt="Mitsubishi Subang"
            description="Web Promotioin for sales of mitsubishi subang. (Dewi Wulandari)"
            link="https://github.com/FthRobby/mitsubishi-final"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todoapp}
              isBlog={false}
              title="Vue Todo-App"
              alt="Vue Todo-App"
              description="Todo app, built using Vue.js and Bootstrap. Has basic CRUD features and with a minimalist design."
              link="https://github.com/FthRobby/Todo-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vuecalc}
              isBlog={false}
              title="Vue Calculator"
              alt="Vue Calculator"
              description="This calculator application is built using javascript and the Vue.js framework, using javascript arithmetic logic operations."
              link="https://github.com/FthRobby/Vue-Calculator"
            />
          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
            imgPath={vuemovie}
            isBlog={false}
            title="Vue Movie"
            alt="vue movie"
            description="This application is made using Vue.js. This app use fetch Api from OMDB API. This app is still in the development stage."
            link="https://github.com/FthRobby/app-vue"
          />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crudphpnative}
              isBlog={false}
              title="CRUD PHP Native"
              alt="crud php native"
              description="Simple crud application using pure php language and bootstrap 4."
              link="https://github.com/FthRobby/crud-php-native"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crudlaravel}
              isBlog={false}
              title="CRUD Laravel with AdminLTE"
              alt="crud laravel"
              description="Application for employee data collection, position data collection, and salary data collection using Laravel."
              link="https://github.com/FthRobby/web-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reactlanding}
              isBlog={false}
              title="React Landing Page"
              alt="react landing page"
              description="This landing page was created using React.js. This landing page is very simple and still under development, because I created it by looking at online tutorials."
              link="https://fthrobby.github.io/sample-react-landing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pinjol}
              isBlog={false}
              title="Online Money Loan"
              alt="online money loan"
              description="Online loan application. created using the Kotlin programming language. This application is still in the development stage."
              link="https://github.com/FthRobby/NganJoekDoeloe"
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
