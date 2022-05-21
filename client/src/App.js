
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import StudentApp from "./StudentApp";


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Route path = "/home" exact component = {Home}/>
      <Route path = "/student" exact component={StudentApp}/>
    </div>
  </Router>
  )
}

export default App;
