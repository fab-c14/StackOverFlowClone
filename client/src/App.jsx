import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AllRoutes from "./AllRoutes";
function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        {console.log("hello world")}
        <AllRoutes />
      </Router>
    </div>
  );
}

export default App;
