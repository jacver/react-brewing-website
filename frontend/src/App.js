// Styling imports
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Component Imports
import TopNav from "./components/TopNav/TopNav";
import APITest from "./components/APITest";

function App() {
  return (
    <div className="App">
      <TopNav />
      <APITest />
    </div>
  );
}

export default App;
