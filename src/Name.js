import React, { Component } from 'react';
import {connect} from 'react-redux'

class Name extends Component {
  render() {
    let {user} = this.props;
    return (
        <div>{user.name? user.name: 'NOt signed in'}</div>
    );
  }
}



let mapStateToProps = function(state){
  return {
    user:state.user,
    hello:'1234524324342'
  }
}

export default connect(mapStateToProps,null)(Name)
