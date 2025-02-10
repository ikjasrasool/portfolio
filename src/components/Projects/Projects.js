import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import library from "../../Assets/Projects/library.png";
import reselling from "../../Assets/Projects/reseller.jpg";
import placement from "../../Assets/Projects/place.jpeg";
import ecommerce from "../../Assets/Projects/ecom.jpeg";
import weather from "../../Assets/Projects/weather.png";
import hospital from "../../Assets/Projects/hos.jpeg";
import blog from "../../Assets/Projects/blog.jpeg";

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
                  imgPath={library}
                  title="Library Management System"
                  description="A system for managing book borrowing, returns, and extensions with QR code scanning for user authentication."
                  ghLink="https://github.com/ikjasrasool/library"
                  demoLink="https://ikjasrasool.github.io/library/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={reselling}
                  title="Trading Platform"
                  description="A platform for buying and selling used vehicles. Users can list their cars, negotiate prices, chat with buyers/sellers, and verify ownership for secure transactions."
                  ghLink="https://github.com/ikjasrasool/reselling_fullstack_project"
              />
            </Col>


            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={placement}
                  title="College Placement Solution"
                  description="A placement system that helps students connect with recruiters and apply for job opportunities efficiently."
                  ghLink="https://github.com/ikjasrasool/college_placement_fullstack_project"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={ecommerce}
                  title="E-Commerce Platform"
                  description="An online shopping platform with secure transactions, product listings, and order management."
                  ghLink="https://github.com/ikjasrasool/Ecommerce_fullsatck_project"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={weather}
                  title="Weather Forecast App"
                  description="A weather app that provides real-time forecasts, temperature updates, and weather alerts for various locations."
                  ghLink="https://github.com/ikjasrasool/weatherApp"
                  demoLink="https://ikjasrasool.github.io/weatherApp/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={hospital}
                  title="Hospital Management System"
                  description="A system to manage patient records, appointments, and doctor schedules efficiently."
                  ghLink="https://github.com/ikjasrasool/reselling_fullstack_project"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={blog}
                  title="Community Blog Platform (Under Development)"
                  description="A  blog platform where users can create, upload, and read posts. Supports user authentication, categories, comments, and voting."
                  ghLink="https://github.com/ikjasrasool/Blog"
                  demoLink="https://ikjas-blog.vercel.app/"
              />
            </Col>

          </Row>
        </Container>
      </Container>
  );
}

export default Projects;
