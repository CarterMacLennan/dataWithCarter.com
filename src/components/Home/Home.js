import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import memoji from "../../Assets/memoji.png";
import { FaCanadianMapleLeaf } from "react-icons/fa";
import leetCodeWithCarterImg from "../../Assets/Projects/leetcodeWithCarter.png";
import dataWithCarterImg from "../../Assets/Projects/dataWithCarter.png";
import linkedin from "../../Assets/linkedin.png";
import mediumImg from "../../Assets/Projects/medium.png";
import { AiFillYoutube, AiFillMediumSquare } from "react-icons/ai";
import ProjectCard from "../Data/ProjectCards";
import NavBar from "../Navbar";

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
              <p className="heading-description">I've started logging my Data journey on Youtube & I solve daily LeetCode problems (Python/ SQL) on my second channel.</p>
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
              imgPath={leetCodeWithCarterImg}
              title={"leetCodeWithCarter"}
              icon={<AiFillYoutube style={{ color: "white" }} />}
              link={"https://www.youtube.com/@leetcodeWithCarter/videos"}
            />
          </Col>
          <Col md={9} lg={4} className="project-card center">
            <ProjectCard
              imgPath={dataWithCarterImg}
              title="dataWithCarter"
              icon={<AiFillYoutube style={{ color: "white" }} />}
              link={"https://www.youtube.com/@datawithcartermaclennan"}
            />
          </Col>
          <Col md={9} lg={4} className="project-card center">
            <ProjectCard
              imgPath={mediumImg}
              title="Medium Blogs"
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
