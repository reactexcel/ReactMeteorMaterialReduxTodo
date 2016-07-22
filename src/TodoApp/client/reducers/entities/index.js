import Immutable from 'immutable';

import {ADD_TODO, CHECK_TODO} from '../../actions/todo'

export function entities(state = Immutable.fromJS([]),action){
	
  if(action.type === ADD_TODO){
  	 state = state.unshift(action.payload)
  }else if(action.type === CHECK_TODO){
  	let id = action.payload.id;
  	state = state.map( (todo) => {
  		if(todo.id === id){
  			todo.checked = !todo.checked;
  		}
  		return todo
  	})
  }
  return state;
}