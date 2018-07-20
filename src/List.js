import React, { Component } from 'react';
import {connect} from 'react-redux'

class List extends Component {
  render() {
    let {feeds}= this.props;  //destructuring
    return (
      <div>
         {feeds.map((feed,i)=>{
           return <div key={i}>{feed.title}</div>
         })}
      </div>
    );
  }
}

function mapStateToProps(state){
    return {
      feeds:state.feeds
    }
}
export default connect(mapStateToProps)(List)

