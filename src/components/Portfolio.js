import { Card, Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Project from "./Project";
import jateSC from '../images/jate-sc.png'


function Portfolio(props) {

  return (
    <div className="mw-100 mx-1">
      <Container className="col-12 d-flex flex-wrap  justify-content-between">
        <Row className=" my-4 col-xl-4">
          <Project repo="https://github.com/JacobDNelsonStone/pwa-text-editor" image={jateSC} deplo="deployed.com" title="J.A.T.E PWA">
          A PWA is a website that looks and behaves as if it is a mobile app. PWAs are built to take advantage of native mobile device features, without requiring the end user to visit an app store, make a purchase and download software locally. Instead, a PWA can be located with a search engine query and accessed immediately through a browser. This was super fun to see how to make a PWA!
          </Project>
        </Row>     
        <Row className=" my-4 col-xl-4">
          <Project repo="github.com/repo" image="path_to_image" deplo="deployed.com" title="project_title">
            My description of my project
          </Project>
        </Row>
        <Row className=" my-4 col-xl-4">
          <Project repo="github.com/repo" image="path_to_image" deplo="deployed.com" title="project_title">
            My description of my project
          </Project>
        </Row>
        <Row className=" my-4 col-xl-4 ">
          <Project repo="github.com/repo" image="path_to_image" deplo="deployed.com" title="project_title">
            My description of my project
          </Project>
        </Row>
        <Row className=" my-4 col-xl-4 ">
          <Project repo="github.com/repo" image="path_to_image" deplo="deployed.com" title="project_title">
            My description of my project
          </Project>
        </Row>
        <Row className=" my-4 col-xl-4">
          <Project repo="github.com/repo" image="path_to_image" deplo="deployed.com" title="project_title">
            My description of my project
          </Project>
        </Row>
      </Container>
    </div>
  )
}

export default Portfolio