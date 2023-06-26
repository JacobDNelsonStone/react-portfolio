import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../App.css'
import Col from 'react-bootstrap/esm/Col';

const MyLink = ({ page, children }) => {
  const pageIsActive = (page) => window.location.href.includes(page)
  const getClassName = (page) => pageIsActive(page) ? "Active" : "Light ActiveLink"


  return (
    <Nav.Link href={`/${page}`} className={getClassName(page)} style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem', marginRight: '1rem', marginLeft: '1rem' }}>
      {children ?? page}
    </Nav.Link>
  )
}

function Header(props) {


  return (
    <div className='header'>
      <Navbar expand="lg" variant="dark" className='DarkBlue py-4 mb-2'>
        <Container>
          <Navbar.Brand className='Light ' style={{ fontSize: '2rem' }}><span className='Pink px-2 pb-1 RoundedLess'>Jacob</span> <span className='pb-1 Blue px-2 RoundedLess'>Nelson-Stone</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-flex ">
              <MyLink page="About Me" />
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