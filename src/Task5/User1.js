import React from 'react';


    const User1 = ({ contact}) => {
      return (
        <div>
            <center><h1>Contact List</h1></center> 
           
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{contact.userId}</h5>
                <h5 class="card-title">{contact.id}</h5>
                <h5 class="card-title">{contact.title}</h5>
                <h5 class="card-title">{contact.body}</h5>
               
            
              </div>
            </div>
        
        </div>
      )
    };
    export default User1;