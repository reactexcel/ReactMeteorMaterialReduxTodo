import Immutable from 'immutable';

import {ADD_TODO, CHECK_TODO,FETCH_TODO, DELETE_TODO} from '../../actions/todo'

export function todos(state = Immutable.fromJS([]),action){
	
  if(action.type === ADD_TODO){
  	 state = state.unshift(Immutable.fromJS(action.payload))
  }else if(action.type === CHECK_TODO){
  	let id = action.payload.id;
  	let checked = action.payload.checked
  	state = state.map( (todo) => {
  		if(todo.get('_id') === id){
  			todo = todo.set('checked',checked);
  		}
  		return todo
  	})
  }else if(action.type === FETCH_TODO){
  	 state = Immutable.fromJS(action.payload)
  }else if(action.type === DELETE_TODO){
  	let id = action.payload.id;
  	let index = -1
  	state.forEach( (todo,i) => {  		
  		if(todo.get('_id') == id){
  			index = i;
  		}

  	})
	state = state.delete(index)	
  }
  return state;
}