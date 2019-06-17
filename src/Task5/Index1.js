import React, { Component } from 'react';
import User1 from './User1';

class Index1 extends Component {
  render() {
    return (
        <User1 contact={this.state.contacts}/> 
    );
  }
  state = {
  contacts:''
   };
  
  componentDidMount() {
    debugger;
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data })
      console.log(this.state.contacts)
    })
    .catch(console.log)
  }
}

export default Index1;