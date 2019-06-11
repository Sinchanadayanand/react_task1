import React from 'react';
import logo from './logo.svg';
 import './Signin.css';

function Signin() {
  return (
    <div className="App2">
        <h1>signin</h1>
     <form >
         <input name="name" value="Email address"></input><br></br>
         <br></br><input name="email" value="passward"></input><br></br>
         <br></br><input id="b" type="submit" value="login"></input><br></br>
         <h6>
           forgot your passward?
         </h6>
</form>
</div>
  );
}

export default Signin;