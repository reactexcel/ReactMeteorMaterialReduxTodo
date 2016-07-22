import Immutable from 'immutable';

import {ADD_TODO} from '../../actions/todo'

export function entities(state = Immutable.fromJS([]),action){
	
  console.log(action)
  if(action.type === ADD_TODO){
  	 let text = action.payload.text;
  	 state = state.unshift({
  	 	text: text
  	 })
  }		
  return state;
}