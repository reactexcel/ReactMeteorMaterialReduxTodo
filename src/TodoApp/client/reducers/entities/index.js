import Immutable from 'immutable';

import {ADD_TODO, CHECK_TODO,FETCH_TODO} from '../../actions/todo'

export function entities(state = Immutable.fromJS([]),action){
	
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
  	 console.log(action.payload)
  	 state = Immutable.fromJS(action.payload)
  }
  return state;
}