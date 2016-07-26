import Immutable from 'immutable';

import {ADD_USER,LOGIN_USER,GET_USER} from '../../actions/users'

export function users(state = Immutable.fromJS({}),action){
	if(action.type === ADD_USER){
    state = Immutable.fromJS(action.payload)
  }else if(action.type === LOGIN_USER){
    state = Immutable.fromJS(action.payload)
  }else if(action.type === GET_USER){
    state = Immutable.fromJS(action.payload)
  }
  return state;
}