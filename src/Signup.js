import React from 'react';
import logo from './logo.svg';
 import './Signup.css';

function Signup() {
  return (
    <div className="App1">
        <h1>signup</h1>
     <form >
         Name<br></br><br></br>
         <input name="name" value=""></input><br></br>
         Email<br></br>
         <input name="email" value=""></input><br></br>
         Passward<br></br>
         <input name="passward" value=""></input><br></br>
         Confirmation<br></br>
         <input name="confirmation" value=""></input><br></br><br></br>
         <input id="a" type="submit" value="create my account"></input>
      </form>
    </div>
  );
}

export default Signup;
