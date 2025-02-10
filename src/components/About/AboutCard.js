import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
      <Card className="quote-card-view">
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p style={{ textAlign: "justify" }}>
              Hi Everyone, I am <span className="purple">Ikjas Rasool P</span>
              <br />
              I am an aspiring Full Stack Developer passionate about building innovative applications.
              <br />
              I have worked on projects like a Library Management System, a College Placement Solution, and a Vehicle Reselling App.
              <br />
              I also won a hackathon in my college’s CSD department, showcasing my problem-solving skills and teamwork.
              <br />
              <br />
              Apart from coding, here are some activities I love:
            </p>
            <ul>
              <li className="about-activity">
                <ImPointRight /> Photography
              </li>
              <li className="about-activity">
                <ImPointRight /> Reading Books
              </li>
              <li className="about-activity">
                <ImPointRight /> Watching Sci-Fi Movies
              </li>
            </ul>


          </blockquote>
        </Card.Body>
      </Card>
  );
}

export default AboutCard;
