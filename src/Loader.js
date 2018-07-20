import React, { Component } from 'react'
import {connect} from 'react-redux'

class Loader extends Component {
  render() {
    let {status} = this.props;
    return (
      <div>
          {status}
      </div>
    )
  }
}


function mapStateToProps(state){
  return {
    status:state.status
  }
}

export default connect(mapStateToProps)(Loader)
