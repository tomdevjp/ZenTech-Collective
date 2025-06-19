import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ecommerce from "../../../Assets/Projects/ecommerce.png";
import emotion from "../../../Assets/Projects/emotion.png";
import blog from "../../../Assets/Projects/blog.png";
import chatify from "../../../Assets/Projects/chatify.png";
import reservation from "../../../Assets/Projects/reservation.png";
import business from "../../../Assets/Projects/business.png";
import { useSelector } from 'react-redux';

function Members() {
  const language = useSelector(state => state.language.language);

  return (
    <Container fluid className="project-section">
      This is members
    </Container>
  );
}

export default Members;
