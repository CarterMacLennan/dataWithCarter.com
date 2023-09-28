import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import neetcode from "../Assets/Bookmarks/neetcode.png";
import ByteByteGo from "../Assets/Bookmarks/byteByteGo.png";
import exponent from "../Assets/Bookmarks/exponent.png";
import narendraL from "../Assets/Bookmarks/narendraL.png";
import mattWeingarten from "../Assets/Bookmarks/mattWeingarten.png";
import ProjectCard from "./ProjectCards";
import myArchitecture from "../Assets/Bookmarks/myArchitecture.png";
import stratascratch from "../Assets/Bookmarks/stratascratch.png";
import freeCodeCamp from "../Assets/Bookmarks/freeCodeCamp.png";
import gauravSen from "../Assets/Bookmarks/gauravSen.png";

function Bookmarks() {
  return (
    <section className="section-section">
      <Container fluid className="home-section" id="content">
        <Container className="bookmarks-container center">
          <h1 className="heading-bookmarks">
            <strong> My <u style={{textDecorationColor: "red"}}>Favourite</u> Learning Resources </strong>
          </h1>
          <Row>
            <Col md={9} lg={4} className="project-card center">
              <ProjectCard
                imgPath={neetcode}
                title={"NeetCode.io"}
                link={"https://neetcode.io/"}
              />
            </Col>
            <Col md={9} lg={4} className="project-card center">
              <ProjectCard
                imgPath={ByteByteGo}
                title="ByteByteGo"
                link={"https://www.youtube.com/channel/UCZgt6AzoyjslHTC9dz0UoTw"}
              />
            </Col>
            <Col md={9} lg={4} className="project-card center">
              <ProjectCard
                imgPath={myArchitecture}
                title="AWS Architecture Series"
                link={"https://www.youtube.com/watch?v=H_S7CxtHgSM&list=PLhr1KZpdzukdeX8mQ2qO73bg6UKQHYsHb"}
              />
            </Col>
            <Col md={9} lg={4} className="project-card center">
              <ProjectCard
                imgPath={stratascratch}
                title={"StrataScratch"}
                link={"https://www.youtube.com/@stratascratch"}
              />
            </Col>
            <Col md={9} lg={4} className="project-card center">
              <ProjectCard
                imgPath={exponent}
                title={"Exponent"}
                link={"https://www.youtube.com/@tryexponent"}
              />
            </Col>
            <Col md={9} lg={4} className="project-card center">
              <ProjectCard
                imgPath={freeCodeCamp}
                title="Free Code Camp"
                link={"https://www.youtube.com/@freecodecamp"}
              />
            </Col>
             <Col md={9} lg={4} className="project-card center">
              <ProjectCard
                imgPath={mattWeingarten}
                title="Matt Weingarten's Blogs"
                link={"https://medium.com/@matt_weingarten"}
              />
            </Col>
            <Col md={9} lg={4} className="project-card center">
              <ProjectCard
                imgPath={narendraL}
                title="NarendraL"
                link={"https://www.youtube.com/@TechDummiesNarendraL/videos"}
              />
            </Col>
             <Col md={9} lg={4} className="project-card center">
              <ProjectCard
                imgPath={gauravSen}
                title="Gaurav Sen"
                link={"https://www.youtube.com/@gkcs"}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Bookmarks;
