import React, { Component } from 'react';
import {changeName} from './redux.js'
import {connect} from 'react-redux'


class Form extends Component {
  render() {
    let {changeName} = this.props;
    return (
        <div>
            <input type="text" ref="name" />
            <button onClick={()=>changeName(this.refs.name.value)}>Change Name</button>
        </div>
    );
  }
}

export default connect(null,{changeName:changeName})(Form)
