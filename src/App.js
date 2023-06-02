import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Contact, Portfolio, AboutMe, Footer, Header } from './components';
import Resume from './components/Resume'
import { useEffect, useState, useRef } from 'react';

function App() {
  const [section, setSection] = useState('');
  // const ref = useRef();
  console.log(section);
  useEffect(() => {
    const paths = ["/Contact", "/AboutMe", "/Portfolio", "/Resume"]
    console.log(paths)
    const url = window.location.href.replace(/^http(s?):\/\//i, "");
    const pageArr = url.split(window.location.host)
    console.log(pageArr)
    const page = pageArr.splice(1, 1)
    console.log(page[0])
    if (page[0] === '/') {
      setSection('/AboutMe')
    }
    setSection(page[0])
  }, [window.location.href])

  console.log(section)
  return (
    <div className='vh-100 scroll'>
      <Header />
      {section === "/Contact" && (
        <Contact />
      )}
      {section === "/AboutMe" && (
        <AboutMe />
      )}
      {section === "/Portfolio" && (
        <Portfolio />
      )}
      {section === "/Resume" && (
        <Resume />
      )}
      <Footer className="mt-2" />
    </div>
  );
}

export default App;
