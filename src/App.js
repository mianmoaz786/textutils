
import { useState } from 'react';
import React  from 'react';

import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,

// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);
  const ShowAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }
  const toogleMode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = 'black'
      document.body.style.color = 'white'
      ShowAlert("Dark mode has been enabled", "success")
      document.title = 'Textutils-Dark Mode'
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      ShowAlert("Light mode has been enabled", "success")
      document.title = 'Textutils-Light Mode'
    }
  }

  return (
    <>
{/* <Router> */}

      <Navbar mode={mode} toogleMode={toogleMode} ShowAlert={ShowAlert} title='Textutils' />


      <Alert alert={alert} />
      <div className="container my-3">
{/* <Routes> */}
        
        {/* <Route exact path="/about" element={<About />} > */}
        {/* </Route> */}
        {/* <Route exact path="/" element={ */}
        <Textform ShowAlert={ShowAlert} heading='Enter the text to analyze below' />
        {/* }> */}
        {/* </Route> */}

        {/* </Routes> */}
      </div>

      {/* </Router> */}
    </>
  );
}

export default App;
