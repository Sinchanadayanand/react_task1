
import React from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import './App.css';
import Signup from './Task1/Signup';
import Names from './Task2/Names';
import Ai from './Task4/Ai';



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/task2" component={Names}></Route>
        <Route exact path="/task1" component={Signup}></Route> 
        {/* <Route exact path="/task3" component={Airthmaticaloperation}></Route>  */}
        <Route exact path="/task4" component={Ai}></Route> 
      </Switch>
    </Router>
  );
}
export default App;
