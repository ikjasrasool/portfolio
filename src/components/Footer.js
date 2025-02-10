import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { AiOutlineMail } from "react-icons/ai";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
      <Container fluid className="footer">
        <Row>
          <Col md="4" className="footer-copywright">
            <h3>Designed by Ikjas</h3>
          </Col>
          <Col md="4" className="footer-copywright">
            <h3>Copyright © {year}</h3>
          </Col>
          <Col md="4" className="footer-body">
            <ul className="footer-icons">
              <li className="social-icons">
                <a
                    href="https://github.com/ikjasrasool"
                    style={{ color: "white" }}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                    href="https://leetcode.com/u/Ikjas_Rasool_22CSR071/"
                    style={{ color: "white" }}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  <SiLeetcode />
                </a>
              </li>
              <li className="social-icons">
                <a
                    href="https://www.linkedin.com/in/ikjas-rasool-163312258/"
                    style={{ color: "white" }}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                    href="mailto:ikjasrasool2022@example.com"
                    style={{ color: "white" }}
                >
                  <AiOutlineMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
  );
}

export default Footer;
