import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import store from './redux'


function Wrapper(){
  return <div>
          <Provider store={store}><App /></Provider>
  </div>
}

ReactDOM.render(<Wrapper />, document.getElementById('root'));
