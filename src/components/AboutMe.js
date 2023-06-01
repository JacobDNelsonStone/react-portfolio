import { Button, Card, CardImg, Col, Container, Row } from "react-bootstrap"
import CardHeader from "react-bootstrap/esm/CardHeader"
import aboutMePic from '../images/about-me-portrait.JPG'
function AboutMe(props) {

  return (
    <Container className="col-12 portfolio DarkBlue Rounded">
      <Row className="py-4">
        <Col className="col-6 Light">
          <h1 className="">About Me!</h1>
        </Col>
        <Col className="col-6">
          <img src={aboutMePic} className="Rounded aboutmepic ms-5"  />
        </Col>
      </Row>
    </Container>
  )
}

export default AboutMe