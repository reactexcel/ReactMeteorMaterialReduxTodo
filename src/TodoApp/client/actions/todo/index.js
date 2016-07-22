import { createAction } from 'redux-actions';

export const ADD_TODO = "ADD_TODO";
export const CHECK_TODO = "CHECK_TODO";

export function addTodo(text){
	return function (dispatch,getState){
		return new Promise( (resolve,reject) => {
			Meteor.call('todo.insert', text, (err, todo) => {
				if(err){
					reject(err)
				}else{
					dispatch(addTodoAction(todo))
					resolve(todo)
				}
			})
		}) 
	} 
}

export function addTodoAction(todo){
	return createAction(ADD_TODO)(todo);
}

export function checkTodo(id){
	return createAction(CHECK_TODO)({
		id: id
	})
}
