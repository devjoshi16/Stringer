import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [mode, setmode] = useState("light");
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
      setmode("dark");
      document.body.style.backgroundColor = "#303030";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "success");
      
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#212529";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar title="Stringer" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode}/>}/>
            <Route exact path="/" element={<TextForm
                showAlert={showAlert}
                heading="Enter the text to analyze below"
                mode={mode}
              />}/>
          </Routes>

          {/* <About/> */}
        </div>
      </Router>
    </>
  );
}

export default App;
