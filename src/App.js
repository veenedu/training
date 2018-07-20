import React, { Component } from 'react';
import Name from './Name'
import Form from './Form'

class App extends Component {
  render() {
    return (
      <div>
        <Form />
        <Name />
      </div>
    );
  }
}





export default App



{/* <input type="text" ref="name" />
           <button onClick={()=>changeName(this.refs.name.value)}>Change Name</button>
           <div>{user? user: 'NOt signed in'}</div> */}


    //        <div>
    //        <input type="text" ref="name" />
    //        <button onClick={()=>changeName(this.refs.name.value)}>Change Name</button>
    //  </div>
