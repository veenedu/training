import React, { Component } from 'react';
import Form from './Form'
import List from './List'
import Loader from './Loader'

class App extends Component {
  render() {
    return (
      <div>
        <Form />
        <Loader />
        <List />
      </div>
    );
  }
}

export default App;
