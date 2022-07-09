// Styling imports
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Routing Imports
import { Routes, Route } from "react-router-dom";
// import { Link } from "react-router-dom";

// Component Imports
import APITest from "./components/APITest";

// Page Imports
import Welcome from "./pages/Welcome/Welcome";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
      </Routes>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
