import React from 'react';


const Dob=(props)=>{
    console.log(props);
    return(
        <div>
            Name:{props.children}|Dob:{props.Name} 
        </div>
    )
}
export default Dob;