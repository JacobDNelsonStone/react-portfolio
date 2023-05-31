import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Contact, Portfolio, Project, AboutMe, Footer, Header } from './components';
import { useEffect, useState, useRef } from 'react';

function App() {
  const [section, setSection] = useState("");
  // const ref = useRef();

  // useEffect(() => {
  //   // scroll to the top of the element
  //   ref.current.scrollTop({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // }, []);
  return (
    <div className='Hero vh-100'>
      <Header />
      {window.location.href.includes("/Contact") && (
        <Contact />
      )}
      {window.location.href.includes("/AboutMe") && (
        <AboutMe />
      )}
      {window.location.href.includes("/Portfolio") && (
        <Portfolio />
      )}
      {/* {window.location.href.includes("/Resume") && (
        <Resume />
      )} */}
      <Footer className="mt-2" />
    </div>
  );
}

export default App;
