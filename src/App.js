import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Contact, Portfolio, Project, AboutMe, Footer, Header } from './components';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



function App() {
  // const [ section, setSection ] = useState(null);

  function displaySection(){
    
  }

  return (
    <div>
      <Header />
      <Contact />
      <Footer />      
    </div>
  );
}

export default App;
