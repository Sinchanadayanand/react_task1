
import React from 'react';
import ReactDOM from 'react-dom'; 
import { BrowserRouter as Router,Route,Switch,Redirect } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
 import Signup from './Signup';
 import Signin from './Signin';
import Names from './Task2/Names';
import Places from './Task2/Places';
import Dobs from './Task2/Dobs';




function App() {
  return (
    <Router>
      <Switch>
     <Route exact path="/" component={Names}></Route>
     <Route exact path="/" component={Places}></Route>
     <Route exact path="/" component={Dobs}></Route>
     <Route exact path="/Signup" component={Signup}></Route>
     <Route exact path="/Signin" component={Signin}></Route>

     </Switch>
     </Router>

     
   
  );
}

export default App;
