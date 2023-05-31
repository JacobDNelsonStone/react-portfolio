import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Contact, Portfolio, Project, AboutMe, Footer, Header } from './components';
import { useEffect, useState } from 'react';

function App() {
  const [ section, setSection ] = useState("");

  function displaySection(){
    const href = window.location.href
    const host = window.location.host 

  }  

  return (
    <div className='Hero vh-100'>
      <Header />
      {window.location.href.includes("/Contact") && (

        <Contact />

      )}
      <Footer />      
    </div>
  );
}

export default App;
