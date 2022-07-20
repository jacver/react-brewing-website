// Styling imports
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Routing Imports
import { Routes, Route } from "react-router-dom";

// Page Imports
import Welcome from "./pages/Welcome/Welcome";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Menu from "./pages/Menu/Menu";
import Events from "./pages/Events/Events";
import Tours from "./pages/Tours/Tours";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/events" element={<Events />} />
        <Route path="/tours" element={<Tours />} />
      </Routes>
    </div>
  );
}

export default App;
