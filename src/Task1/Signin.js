import React, { Component } from 'react';
import './Signin.css';


class LifecycleA extends Component {
  constructor(props){
    super(props);
    this.state={
      name:"sinchana"
    }
    console.log('LifecycleA this.component constructor');
  }
  componentWillMount(){
    console.log('LifecycleA this.componentWillMount')
  }
  
  render() {
    return (
      <div className="App2">
        <h1>signin</h1>
     <form >
          <input id="input" name="name" value="Email address"></input><br></br> 
         <br></br><input id="input" name="email" value="passward"></input><br></br>
         <br></br><input id="b" type="submit" value="login"></input><br></br>
         <h6>
           forgot your passward?
         </h6>
      </form>
      </div>
    );
  }

  componentDidMount(){
    console.log('LifecycleA this.componentDidMount')
  }
}

export default LifecycleA;