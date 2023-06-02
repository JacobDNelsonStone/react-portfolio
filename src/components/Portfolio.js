import { Card, Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Project from "./Project";
import jateSC from '../images/logo.png';
import gp2SC from '../images/gp2-sc.png';
import gp1Logo from '../images/gp1-logo.png';
import sqlCLI from '../images/unit-12-homework-sc.png';
import weatherApiSC from '../images/weatherapisc.png'
import reactportfolioSC from '../images/react-portfolio.png';

function Portfolio(props) {

  return (
    <div className="mw-100 mx-1 portfolio">
      <Container className="col-12 d-flex flex-wrap  justify-content-between">
        <Row className=" my-4 col-xl-4">
          <Project repo="https://github.com/JacobDNelsonStone/pwa-text-editor" image={jateSC} deplo="https://pwa-text-editor-jacobns.herokuapp.com/" title="Just-Another-Text-Editor PWA">
          </Project>
        </Row>     
        <Row className=" my-4 col-xl-4">
          <Project repo="https://github.com/hayessea000/discussion-board" image={gp2SC} deplo="https://discussion-board-hayessea000.herokuapp.com/login" title="Web Development Social Hub">
          </Project>
        </Row>
        <Row className=" my-4 col-xl-4">
          <Project repo="https://github.com/JacobDNelsonStone/live-music-search-ticketmaster-api" image={gp1Logo} deplo="https://jacobdnelsonstone.github.io/live-music-search-ticketmaster-api/" title="Ticketmaster API App">
          </Project>
        </Row>
        <Row className=" my-4 col-xl-4 ">
          <Project repo="https://github.com/JacobDNelsonStone/sql-employee-tracker-cl-app" image={sqlCLI} deplo="https://github.com/JacobDNelsonStone/sql-employee-tracker-cl-app#readme" title="SQL Database Employee Tracker (CMS) ">
          </Project>
        </Row>
        <Row className=" my-4 col-xl-4 ">
          <Project repo="https://github.com/JacobDNelsonStone/open-weather-api-web-app" image={weatherApiSC} deplo="https://jacobdnelsonstone.github.io/open-weather-api-web-app/" title="5-Day Weather Forecast Dashboard">
          </Project>
        </Row>
        <Row className=" my-4 col-xl-4">
          <Project repo="https://github.com/JacobDNelsonStone/react-portfolio" image={reactportfolioSC} deplo="deployed.com" title="React.JS Portfolio">
          </Project>
        </Row>
      </Container>
    </div>
  )
}

export default Portfolio