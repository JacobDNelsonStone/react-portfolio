import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Contact, Portfolio, AboutMe, Footer, Header } from './components';
import Resume from './components/Resume';
import { useEffect, useState, useRef } from 'react';

function App() {
  const [section, setSection] = useState("");
  // const ref = useRef();
  
  useEffect(() => {
    const paths = ["/Contact", "/AboutMe", "/Portfolio", "/Resume"]
    const url = window.location.href.replace(/^http(s?):\/\//i, "");
    const pageArr = url.split(window.location.host)
    console.log(pageArr)
    const page = pageArr.splice(1, 1)
    console.log(page)
    if (!paths.includes(page)) {
      setSection('/AboutMe')
    }
    setSection(page)
  }, [window.location.href])
  
  console.log(section)
  return (
    <div className='vh-100 scroll'>
      <Header />
      {section[0] === "/Contact" && (
        <Contact />
      )}
      {section[0] === "/AboutMe" && (
        <AboutMe />
      )}
      {section[0] === "/Portfolio" && (
        <Portfolio />
      )}
      {section[0] === "/Resume" && (
        <Resume />
      )}
      <Footer className="mt-2" />
    </div>
  );
}

export default App;
