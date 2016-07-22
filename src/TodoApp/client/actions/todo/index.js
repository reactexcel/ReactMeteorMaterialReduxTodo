import { createAction } from 'redux-actions';

export const ADD_TODO = "ADD_TODO";


export function addTodo(text){
	return createAction(ADD_TODO)({
		text: text
	});
}
