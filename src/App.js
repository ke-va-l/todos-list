import { useState } from "react";
import Navbar from "./Navbar";
import TextForm from "./TextForm";
import Alert from "./Alert";
import About from "./About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"; // ✅ Correct package

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    // Optional: Auto-dismiss alert
    setTimeout(() => setalert(null), 2000);
  };

  const toggleMode1 = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark Mode has been enabled", "Success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "Success");
    }
  };

  const changeTheme = () => {
    document.body.style.backgroundColor = "#b49c97";
  };

  return (
    <Router>
      <Navbar
        title="Appsutils"
        mode={mode}
        toggleMode={toggleMode1}
        changeTheme={changeTheme}
      />
      
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route path="/" element={<TextForm heading="Hello" />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
