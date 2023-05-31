import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../App.css'

function Header(props) {

  return (
    <Navbar expand="lg" variant="dark" className='DarkBlue py-5 mb-5'>
      <Container>
        <Navbar.Brand href="#home" className='Light' style={{ fontSize: '2rem'}}>Jacob Nelson-Stone</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#aboutMe" className='Light'>About Me</Nav.Link>
            <Nav.Link href="#portfolio" className='Light'>Portfolio</Nav.Link>
            <Nav.Link href="#contact" className='Light'>Contact</Nav.Link>
            <Nav.Link href="#resume" className='Light'>Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header