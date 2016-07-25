import Immutable from 'immutable';

import {LOADING} from '../../actions/todo'

export function ui(state = Immutable.fromJS({}),action){
  if(action.type === LOADING){
  	state = state.set('loading',action.payload.action)
  }
  return state;
}