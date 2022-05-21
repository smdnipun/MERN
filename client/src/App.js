
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Registration from "./component/comman/Registration/Registration";



function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Route path = "/home" exact component = {Home}/>
      <Route path = "/reg" exact component = {Registration}/>
    </div>
  </Router>
  )
}

export default App;
