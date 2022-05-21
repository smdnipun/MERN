import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Reg from "./component/student/Reg";


export default function StudentApp() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Route path = "/home" exact component = {Home}/>
      <Route path = "/reg" exact component = {Reg}/>
    </div>
  </Router>
  )
}