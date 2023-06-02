import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../App.css'

const MyLink = ({ page, children }) => {
  const pageIsActive = (page) => window.location.href.includes(page)
  const getClassName = (page) => pageIsActive(page) ? "Active" : "Light"

  return (
    <Nav.Link href={`/${page}`} className={getClassName(page)}>
      {children ?? page}
    </Nav.Link>
  )
}

function Header(props) {


  return (
    <div className='header'>
      <Navbar expand="lg" variant="dark" className='DarkBlue py-4 mb-2'>
        <Container>
          <Navbar.Brand className='Light ' style={{ fontSize: '2rem' }}><span className='Pink px-1 pb-1 RoundedLess'>Jacob</span> <span className='pb-1 Blue px-1 RoundedLess'>Nelson-Stone</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-flex justify-content-around">
              {/* <Nav.Link href="/AboutMe" className={ window.location.href.includes("/AboutMe") ?"Active" : "Light" }>About Me</Nav.Link> */}
              {/* <Nav.Link href="/Portfolio" className={ window.location.href.includes("/Portfolio") ?"Active" : "Light" }>Portfolio</Nav.Link> */}
              {/* <Nav.Link href="/Contact" className={ window.location.href.includes("/Contact") ?"Active" : "Light" }>Contact</Nav.Link> */}
              {/* <Nav.Link href="/Resume" className={ window.location.href.includes("/Resume") ?"Active" : "Light" }>Resume</Nav.Link> */}

              <MyLink page="AboutMe">About Me</MyLink>
              <MyLink page="Portfolio" />
              <MyLink page="Contact" />
              <MyLink page="Resume" />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header