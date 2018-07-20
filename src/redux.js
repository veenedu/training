let redux = require('redux');

//action creators

//change name
export function changeName(name){
  return {
    type:'CHANGE_NAME',
    payload:name
  }
}

export function changeAge(age){
  return {
    type:'CHANGE_AGE',
    payload:age
  }
}

function addFeed(feed){
  return {
    type:'ADD_FEED',
    payload:feed
  }
}

//Reducers
const defaultUser ={name:'India'}
function userReducer(state=defaultUser,action){
  if(action.type== 'CHANGE_NAME'){
    return {...state,name:action.payload}
  }
  if(action.type== 'CHANGE_AGE'){
    return {...state,age:action.payload}
  }

  return state
}

let defaultFeeds= []
function feedsReducer(state=defaultFeeds,action){
  if(action.type=='ADD_FEED'){
    return {
          ...state,
          feeds: state.feeds.concat(action.payload)
    }
  }
  return state;
}


let data = {
  user: userReducer,
  feeds:feedsReducer
}
let store = redux.createStore(redux.combineReducers(data));

export default store;

// store.subscribe(function(){
//   console.log(store.getState());
// })

// store.dispatch(changeName('Vinoth'));

// setTimeout(function(){
//   store.dispatch(changeName('Rakesh'));
// },1000)

// setTimeout(function(){
//   store.dispatch(changeAge(45));
// },2000)


// store.dispatch(addFeed('Hello'));
// store.dispatch(addFeed('Good Morning!!'));

// setTimeout(function(){
//     store.dispatch(addFeed('Good Night!!'));
// },2000)
