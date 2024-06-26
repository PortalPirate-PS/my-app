import "./App.css";
import React , { useState }from "react";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState("light"); //Whether dark mode is wnabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#041c4e";
      showAlert("Dark mode has been enabled", "Success");
      document.title = "TextUtils-Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "Success");
      document.title = "TextUtils-Light Mode";
    }
  }
  return (
    <>
      {/* <Navbar title="Vedam Classes" aboutText="About Vedam" /> */}
      {/* <Navbar /> */}
     {/* <Router> */}

        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} /> 
       
        <Alert alert={alert} />
        <div className="container my-3">gjsg
        
      {/* <Routes>
        <Route exact path="/" element={< TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} />
        <Route exact path="/about" element={<About />} />
        
      </Routes> */}
      < TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
        </div>
      {/* </Router> */}
      {/* <About/> */}
    </>
  );
}

export default App;
