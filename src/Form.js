import React, { Component } from 'react';
import {connect} from 'react-redux'
import {searchKeyword} from './reduxStore'

class Form extends Component {
  state={
    text:''
  }

  handleSubmit=(e)=>{
    e.preventDefault()
    let {searchKeyword} = this.props
    searchKeyword(this.state.text)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <input
              style={{
                width:400
              }}
              placeholder="Type keyword like java, javascript then press enter"
              type="text"
              onChange={(e)=> this.setState({text:e.target.value})} value={this.state.text}
            />
      </form>
    );
  }
}

export default connect(null, {searchKeyword})(Form)
