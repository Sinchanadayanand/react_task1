import React, { Component } from 'react';
import './Airthmaticaloperation.css';


class Airthmaticaloperation extends Component {
    constructor(props){
        super(props);
        this.state={
          num1:10,
          num2:10,
          num3:10
        }
        this.add=this.add.bind(this);
        this.sub=this.sub.bind(this);
        this.mul=this.mul.bind(this);
    }
    add(){
      this.setState ({num1:this.state.num1+5});
  }

  sub(){
    if(this.state.num2 < 5){
    this.setState ({num2:0});
}
else {
  this.setState({num2: this.state.num2-5});
  }
  }

mul(){
  this.setState ({num3:this.state.num3*5});
}

    render() {
        return (
            <div className="div">
             <div id="div1"><h1>{this.state.num1}</h1><br></br>
               <button onClick={this.add}>addition</button></div>
               <div id="div2"><h1>{this.state.num2}</h1><br></br>
               <button onClick={this.sub}>subtraction</button></div>
               <div id="div3"><h1>{this.state.num3}</h1><br></br>
               <button onClick={this.mul}>multiplication</button></div>
            </div>
        );
    }
}

export default Airthmaticaloperation;















// this.changeName=this.changeName.bind(this);
// }
//     changeName(){
//         this.setState ({name:'sharadhi', age:22});
//     }

// render() {
// return (
//     <div>
//         <button onClick={this.changeName}>clickme</button>
//     </div>
// );
// }
// }

// export default Events;