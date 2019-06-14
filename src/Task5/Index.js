import React, { Component } from 'react';
import User from './User';

class Index extends Component {
  render() {
    return (
        <User contact={this.state.contacts}/> 
    );
  }
  state = {
  contacts:''
   };
  
  componentDidMount() {
    debugger;
    fetch('https://api.github.com/users/KrunalLathiya')
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data })
      console.log(this.state.contacts)
    })
    .catch(console.log)
  }
}

export default Index;