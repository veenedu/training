import {call,takeEvery,put} from 'redux-saga/effects'
import { delay} from 'redux-saga'
import axios from 'axios'
import { root } from '../node_modules/postcss';
import {createStore,applyMiddleware,combineReducers} from 'redux'
import createSagaMiddleWare from 'redux-saga';


const sagaMiddleWare = createSagaMiddleWare();



//action creators

//Search Keyword
export function searchKeyword(q){
  return {
    type:'SEARCH_KEYWORD',
    payload:q
  }
}

function searchKeywordSuccess(feeds){
  return {
    type:'SEARCH_KEYWORD_SUCCESS',
    payload:feeds
  }
}
function clearStatus(){
  return {
    type:'CLEAR_STATUS',
  }
}



//Reducers
const defaultFeeds = []
function feedsReducer(state=defaultFeeds,action){
  console.log(action)
  if(action.type== 'SEARCH_KEYWORD'){
    return defaultFeeds;
  }
  if(action.type== 'SEARCH_KEYWORD_SUCCESS'){
    return action.payload;
  }
  return state
}

let defaultStatus=''
function statusReducer(state=defaultStatus,action){
  if(action.type== 'SEARCH_KEYWORD'){
    return 'Loading....';
  }
  if(action.type== 'SEARCH_KEYWORD_SUCCESS'){
    return 'Success';
  }
  if(action.type== 'CLEAR_STATUS'){
    return defaultStatus
  }
  return state
}

//Saga codes
function* getFeedsFromInternet(action){
  yield delay(1000)
  let response = yield call(axios,{url:`https://www.reddit.com/r/${action.payload}.json`})
  let feeds= response.data.data.children.map((row)=>{
    return {
      title:row.data.title
    }
  })
  yield put (searchKeywordSuccess(feeds))
  yield delay(2000)
  yield put(clearStatus())
}

function* rootSaga(){
  return yield takeEvery('SEARCH_KEYWORD',getFeedsFromInternet)
}
//saga codes end


//Root reducer
let data = {
  feeds: feedsReducer,
  status:statusReducer
}
let store = createStore(combineReducers(data),applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(rootSaga);

export default store;
