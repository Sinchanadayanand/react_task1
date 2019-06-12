import React from 'react';
 import './Signup.css';
 import Signin from './Signin';
function Signup() {
  return (
    <div className="App1">
        <h1>signup</h1>
     <form >
         <h4 id="h">Name</h4>
         <input name="name" value=""></input>
         <h4 id="h">Email</h4>
         <input className="input" name="email" value=""></input>
         <h4 id="hh">Passward</h4>
         <input className="input" name="passward" value=""></input>
         <h4>Confirmation</h4>
         <input className="input" name="confirmation" value=""></input><br></br><br></br>
         <input id="a" type="submit" value="create my account"></input>
      </form>
      <Signin/>
    </div>
  );
}
export default Signup;
