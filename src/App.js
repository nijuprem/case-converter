// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textsection from './components/Textsection';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  //Alert is used as an object

  const showAlert =(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1200);
  }


  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.background = 'grey'
      showAlert("Dark Mode Enabled", "success")
    }
    else{
      setMode('light')
      document.body.style.background = 'white'
      showAlert("Light Mode Enabled", "success")
    }
  }

  return (
    <>
     <Router>
        <Navbar title ="Case Converter" about="About Case Converter" mode={mode} toggleMode={toggleMode}/>
        {/* <Navbar/> */}
        <Alert alert={alert}/>
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About mode={mode}/>}/>
            <Route exact path="/" element={<Textsection heading = "Enter Your Text Below" mode={mode} showAlert={showAlert}/>}/> 
          </Routes>
        </div>
      </Router>  
    </>
  );
}

export default App;
