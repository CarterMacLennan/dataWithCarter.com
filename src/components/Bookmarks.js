import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import neetcode from "../Assets/Bookmarks/neetcode.png";
import ByteByteGo from "../Assets/Bookmarks/byteByteGo.png";
import exponent from "../Assets/Bookmarks/exponent.png";
import narendraL from "../Assets/Bookmarks/narendraL.png";
import seattleDataGuy from "../Assets/Bookmarks/seattleDataGuy.png";
import kahan from "../Assets/Bookmarks/kahan.png";
import mattWeingarten from "../Assets/Bookmarks/mattWeingarten.png";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import {MdOutlineDesignServices} from "react-icons/md"
import {FaAws} from "react-icons/fa"
import ProjectCard from "./ProjectCards";
import myArchitecture from "../Assets/Bookmarks/myArchitecture.png";
import stratascratch from "../Assets/Bookmarks/stratascratch.png";
import { HiOutlineDatabase } from "react-icons/hi";

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
                icon={<SiLeetcode style={{ color: "white" }} />}
                link={"https://neetcode.io/"}
              />
            </Col>
            <Col md={9} lg={4} className="project-card center">
              <ProjectCard
                imgPath={ByteByteGo}
                title="ByteByteGo"
                icon={<MdOutlineDesignServices style={{ color: "white" }} />}
                link={"https://www.youtube.com/channel/UCZgt6AzoyjslHTC9dz0UoTw"}
              />
            </Col>
            <Col md={9} lg={4} className="project-card center">
              <ProjectCard
                imgPath={myArchitecture}
                title="AWS Architecture Series"
                icon={<FaAws style={{ color: "white" }} />}
                link={"https://www.youtube.com/watch?v=H_S7CxtHgSM&list=PLhr1KZpdzukdeX8mQ2qO73bg6UKQHYsHb"}
              />
            </Col>

            <Col md={9} lg={4} className="project-card center">
              <ProjectCard
                imgPath={narendraL}
                title="NarendraL"
                icon={<MdOutlineDesignServices style={{ color: "white" }} />}
                link={"https://www.youtube.com/@TechDummiesNarendraL/videos"}
              />
            </Col>
            <Col md={9} lg={4} className="project-card center">
              <ProjectCard
                imgPath={seattleDataGuy}
                title="Seattle Data Guy"
                icon={<HiOutlineDatabase style={{ color: "white" }} />}
                link={"https://www.youtube.com/@SeattleDataGuy"}
              />
            </Col>
             <Col md={9} lg={4} className="project-card center">
              <ProjectCard
                imgPath={mattWeingarten}
                title="Matt Weingarten's Blogs"
                icon={<HiOutlineDatabase style={{ color: "white" }} />}
                link={"https://medium.com/@matt_weingarten"}
              />
            </Col>
            <Col md={9} lg={4} className="project-card center">
              <ProjectCard
                imgPath={stratascratch}
                title={"StrataScratch"}
                icon={<AiOutlineConsoleSql style={{ color: "white" }} />}
                link={"https://www.youtube.com/@stratascratch"}
              />
            </Col>
            <Col md={9} lg={4} className="project-card center">
              <ProjectCard
                imgPath={kahan}
                title="Kahan Data Solutions"
                icon={<HiOutlineDatabase style={{ color: "white" }} />}
                link={"https://www.youtube.com/@KahanDataSolutions/videos"}
              />
            </Col>
            <Col md={9} lg={4} className="project-card center">
              <ProjectCard
                imgPath={exponent}
                title={"Exponent"}
                icon={<MdOutlineDesignServices style={{ color: "white" }} />}
                link={"https://www.youtube.com/@tryexponent"}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Bookmarks;
