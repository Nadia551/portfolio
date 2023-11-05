import React from "react";
import "../App.css";
import { Container, Row, Col } from "react-bootstrap";
import Text from "./Text";
import Navi from "./Navi";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaXing } from "react-icons/fa";
import Skill from "./Skill";

function Home() {
  return (
    <div>
      <Navi />
      <Container>
        <Row>
          <Col md={6}>
            <h2 className="headtext">
              Hello <span className="wave">👋 </span>
            </h2>
            <h2 className="nametext">I'm Nadia</h2>
            <span></span>
            <Text />
            <button
              onClick={() => {
                window.open("https://github.com/Nadia551");
              }}
              className="socailmediabtn"
            >
              <AiFillGithub className="icon" />
            </button>
            <button
              onClick={() => {
                window.open("https://www.linkedin.com/in/nadia551/");
              }}
              className="socailmediabtn"
            >
              <FaLinkedinIn className="icon" />
            </button>
            <button
              onClick={() => {
                window.open(
                  "https://www.xing.com/profile/Nadejda_Strateliuc/cv"
                );
              }}
              className="socailmediabtn"
            >
              <FaXing className="icon" />
            </button>
          </Col>

          <Col md={6}>
            <div className="imagedeveloper"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
