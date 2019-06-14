
import React from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import './App.css';
import Signup from './Task1/Signup';
import Names from './Task2/Names';
import Ai from './Task4/Ai';
import Index from './Task5/Index';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/task2" component={Names}></Route>
        <Route exact path="/task1" component={Signup}></Route> 
        {/* <Route exact path="/task3" component={Airthmaticaloperation}></Route>  */}
        <Route exact path="/task4" component={Ai}></Route> 
        <Route exact path="/task5" component={Index}></Route> 
      </Switch>
    </Router>
  );
}
export default App;





























// import React, { Component } from 'react';
// import User from './Task5/User';

// class App extends Component {
//   render() {
//     return (
//         <User contacts={this.state.contacts}/> 
//     );
//   }
//   state = {
//   contacts:''
//    };
  
//   componentDidMount() {
//     debugger;
//     fetch('https://api.github.com/users/KrunalLathiya')
//     .then(res => res.json())
//     .then((data) => {
//       this.setState({ contacts: data })
//       console.log(this.state.contacts)
//     })
//     .catch(console.log)
//   }
// }

// export default App;
