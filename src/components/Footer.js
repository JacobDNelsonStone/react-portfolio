import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Footer(props) {

  return (

    <Container className='mt-5 footer Purple Light py-2 mx-0' style={{minWidth: '100%'}}>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand className='Light' style={{ fontSize: '2rem' }}>Jacob Nelson-Stone</Navbar.Brand>
            <Nav className="me-auto d-flex flex-row ">
              <Nav.Link href="https://github.com/JacobDNelsonStone" className='Light px-2'>GitHub</Nav.Link>
              <Nav.Link href="https://LinkedIn.com" className='Light px-2'>LinkedIn</Nav.Link>
              <Nav.Link href="#resume" className='Light px-2'>Resume</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    </Container>

  )
}

export default Footer