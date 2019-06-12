import React from 'react';


const Place=(props)=>{
    console.log(props);
    return(
        <div>
            Name:{props.children}|Place:{props.Name} 
        </div>
    )
}
export default Place;