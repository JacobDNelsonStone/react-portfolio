import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Footer(props) {

  return (

    <Container className='mt-5 footer Purple Light py-2 mx-0' style={{minWidth: '100%'}}>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand style={{ fontSize: '2rem', color: "white" }}>Jacob Nelson-Stone</Navbar.Brand>
            <Nav className="me-auto d-flex flex-row">
              <Nav.Link href="https://github.com/JacobDNelsonStone" target="_blank" className='text-light px-2 ActiveLink footerLinkPadding'>GitHub</Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/jacob-nelson-stone-7a290627a/" target="_blank" className='text-light px-2 ActiveLink footerLinkPadding'>LinkedIn</Nav.Link>
              <Nav.Link href="/Resume" className='text-light px-2 ActiveLink footerLinkPadding'>Resume</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    </Container>

  )
}

export default Footer