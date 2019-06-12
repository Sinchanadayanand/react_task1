import React from 'react';


const Name=(props)=>{
    console.log(props);
    return(
        <div>
            Name:{props.children}|age:{props.age} 
        </div>
    )
}
export default Name;