import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import TopNav from "./component/student/topnav/TopNav";

export default function StudentApp() {
  return (
    <Router>
        <TopNav/>
    <div className="App">
      {/* <Route path = "/home" exact component = {Home}/> */}
      {/* <Route path = "/topnavs" exact component = {Home}/> */}
    </div>
  </Router>
  )
}