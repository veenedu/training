var redux  = require('redux');


function users(){
    return []
}

//THESE  are called reducers
function tasks(state=[],action){
    if(action.type =='add_task'){
        //  state.push(action.payload)
        //  return state;
        return state.concat(action.payload)
    }
    if(action.type=='remove_task'){
        //write login to calculate new state
        return state.filter((task)=>{
            if(task.id == action.payload.id){
                return false
            }
            return true
        })
    }
    return state;
}

function user(state=null,action){
    if(action.type=='login'){
        return action.payload
    }
    if(action.type =='change_name'){
        var clonedState=  {...state};
        clonedState.Name = action.payload.Name;
        return clonedState;
    }
    return state
}

var rootReducer = {
    users: users,
    tasks: tasks,
    user:user
}


var store  = redux.createStore(redux.combineReducers(rootReducer))

store.subscribe(function(){
    console.log(store.getState());
})

store.dispatch({type:'load_tasks'})
store.dispatch({type:'add_task',payload:{text:'Buy bread',id:1}})
store.dispatch({type:'login',payload:{Name:'Praveen',id:1,email:'p@p.com'}})
store.dispatch({type:'add_task',payload:{text:'Task 1',id:2}})
store.dispatch({type:'add_task',payload:{text:'Task 2',id:3}})
store.dispatch({type:'remove_task',payload:{id:1}})
store.dispatch({type:'change_name',payload:{Name:'Shweta'}})

