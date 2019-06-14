import React, { Component } from 'react';


class Ai extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      name: '',
    }
    this.changeName = this.changeName.bind(this);
  }
  changeName() {
    this.setState({ name:'sinchana'});
  }
  myChangeHandler = (event) => {
    this.setState({ username: event.target.value });
  }

  render() {
    return (
      <div><h2>{this.state.name}</h2>
        <input type="text" value="xyz|" /><br />
        <button onClick={this.changeName}>ChangeName</button>
        <h1>{this.state.username}</h1>
        <input
          type='text'
          onChange={this.myChangeHandler}/>
      </div>
    );
  }
}
export default Ai;
