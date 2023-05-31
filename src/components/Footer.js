import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Footer(props) {

  return (

    <Container className='mt-5 footer Purple Light py-5 mx-0' style={{minWidth: '100%'}}>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home" className='Light' style={{ fontSize: '2rem' }}>Jacob Nelson-Stone</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="" className='Light'>GitHub</Nav.Link>
              <Nav.Link href="#portfolio" className='Light'>LinkedIn</Nav.Link>
              <Nav.Link href="#resume" className='Light'>Resume</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>

  )
}

export default Footer