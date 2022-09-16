import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { BrowserRouter as Router, Route,Switch} from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Profile from "./Profile";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/Profile" element={<Profile/>} />
          <Route path="/" element={<Login/>} />
          <Route path="/Signup" element={<Signup/>} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
