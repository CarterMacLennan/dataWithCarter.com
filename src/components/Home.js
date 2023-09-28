import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import memoji from "../Assets/Home/memoji.png";
import { FaCanadianMapleLeaf } from "react-icons/fa";
import youtube from "../Assets/Projects/youtube.png";
import knowledgeSharing from "../Assets/Projects/knowledgeSharing.png";
import linkedin from "../Assets/Home/linkedin.png";
import apacheSpark from "../Assets/Projects/apacheSpark.png";
import { AiFillYoutube, AiFillGithub, AiFillMediumSquare } from "react-icons/ai";
import ProjectCard from "./ProjectCards";

function Home() {
  const redirectToLinkedIn = () => {
    window.open("https://www.linkedin.com/in/cartermaclennan/");
  };
  const [isHovered, setIsHovered] = useState(false);

  const handleImageHover = () => {
    setIsHovered(true);
  };

  const handleImageLeave = () => {
    setIsHovered(false);
  };

  return (
    <section className="section-section">
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={6} className="home-header">
              <h1 className="heading-firstname">
                <strong> Carter </strong>
                <strong> MacLennan</strong>
              </h1>
              <img
                src={memoji}
                alt="memoji"
                className="memoji-mobile center"
              />
              <h4 className="heading-subtitle">
                <u>Data Engineer</u> from Canada&nbsp;
                <FaCanadianMapleLeaf className="canada" />
              </h4>
              <p className="heading-description">Trying to give back to the dev community!</p>
              <Row>
                <Col md={8}>
                  <div className="linkedin-container" onClick={redirectToLinkedIn}
                      onMouseEnter={handleImageHover}
                      onMouseLeave={handleImageLeave}
                  >
                    <img
                      src={linkedin}
                      alt="linkedin"
                      className="img-fluid linkedin"
                    />
                    <p  className={isHovered ? "underline-hover" : ""}>Let's Connect!</p>
                  </div>
                </Col>
                <Col md={4}/>
              </Row>
           </Col>
            <Col md={5} sm={0} xs={0} className="memoji-desktop">
              <img
                src={memoji}
                alt="memoji"
                className="img-fluid memoji-desktop center"
              />
            </Col>
            <Col md={1}/>
          </Row>
        </Container>
      </Container>
      <Container fluid className="content-section" id="content">
      <Container className="content-container center">
        <Row>
          <Col md={9} lg={4} className="project-card center">
            <ProjectCard
              imgPath={knowledgeSharing}
              title="Knowledge Sharing on GitHub"
              icon={<AiFillGithub style = {{ color: "white" }} />}
              link={"https://github.com/CarterMacLennan/knowledge-sharing"}
            />
          </Col>
          <Col md={9} lg={4} className="project-card center">
            <ProjectCard
              imgPath={youtube}
              title={"Teaching on YouTube"}              
              icon={<AiFillYoutube style={{ color: "white" }} />}
              link={"https://www.youtube.com/@leetcodeWithCarter/videos"}
            />
          </Col>
          <Col md={9} lg={4} className="project-card center">
            <ProjectCard
              imgPath={apacheSpark}
              title="Apache Spark Blogs"
              icon={<AiFillMediumSquare style={{ color: "white" }} />}
              link={"https://medium.com/@cartermaclennan"}
            />
          </Col>
        </Row>
      </Container>
    </Container>
    </section>
  );
}

export default Home;