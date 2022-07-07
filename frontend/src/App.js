// Styling imports
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Routing Imports
import { Routes, Route } from "react-router-dom";
// import { Link } from "react-router-dom";

// Component Imports
import TopNav from "./components/TopNav/TopNav";
import APITest from "./components/APITest";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <TopNav />
      <Routes>
        <Route path="/" element={<APITest />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
