import React from 'react';
import Index1 from './Index1';


    const User = ({ contact}) => {
      return (
        <div>
            <center><h1>Contact List</h1></center> 
           
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{contact.name}</h5>
                <h5 class="card-title">{contact.company}</h5>
                <h5 class="card-title">{contact.blog}</h5>
                <h5 class="card-title">{contact.location}</h5>
                <h5 class="card-title">{contact.bio}</h5>
            
              </div>
            </div>
        <Index1/>
        </div>
      )
    };
    export default User;