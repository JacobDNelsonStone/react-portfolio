import { Button, Card, CardImg, Col, Container, Row } from "react-bootstrap"
import CardHeader from "react-bootstrap/esm/CardHeader"
import aboutMePic from '../images/about-me-portrait.JPG'
function AboutMe(props) {

  return (
    <Container className="col-xl-12 portfolio Blue Rounded marginBottom ">
      <Row className="py-4">
        <Col className="col-xl-8 Light ">
          <h1 className="">About Me</h1>
          <br></br>
          <div className="d-flex flex-column">
            <p className="fs-4 ">Hello! my name is Jacob Nelson-Stone. I am 22 years old, I love music, my wife and son, and I love coding and programming to make people's lives easier!<br /><br /> I've always been interested in tech and computing, and I decided to take the plunge into Web Development at the beginning of 2023.I love programming and solving problems, so being able to do that professionally is incredible. <br /> <br />Enjoy looking through my portfolio and I look forward to hearing from you! </p>
          </div>
        </Col>
        <Col className="col-xl-4 col-12 d-flex justify-content-center">
          <center><img src={aboutMePic} className="Rounded aboutmepic ms-5" /></center>
        </Col>
      </Row>
    </Container>
  )
}

export default AboutMe