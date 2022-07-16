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
      <Routes>
        <Route path="/menu" element={<Menu />} />
      </Routes>
      <Routes>
        <Route path="/events" element={<Events />} />
      </Routes>
    </div>
  );
}

export default App;
