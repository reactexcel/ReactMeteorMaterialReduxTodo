import { createAction } from 'redux-actions';

export const ADD_TODO = "ADD_TODO";
export const CHECK_TODO = "CHECK_TODO";


export function addTodo(text){
	return createAction(ADD_TODO)({
		text: text
	});
}

export function checkTodo(id){
	return createAction(CHECK_TODO)({
		id: id
	})
}
