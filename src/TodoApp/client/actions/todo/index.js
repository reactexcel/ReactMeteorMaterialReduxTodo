import { createAction } from 'redux-actions';

export const ADD_TODO = "ADD_TODO";
export const CHECK_TODO = "CHECK_TODO";
export const FETCH_TODO = "FETCH_TODO";

import Tasks from '../../../collections/Tasks'

export function fetchTodo(){
	return function (dispatch,getState){
		return new Promise( (resolve,reject) => {
			let data = Tasks.find().fetch()
			dispatch(fetchTodoAction(data))
			resolve(data)
		}) 
	}
}
export function fetchTodoAction(data){
	return createAction(FETCH_TODO)(data)
}

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

export function checkTodo(id,checked){
	Meteor.call('todo.mark',id,checked);
	//didn't use async this time since didn't not need any ressponse from server
	console.log(checked)
	return createAction(CHECK_TODO)({
		id: id,
		checked: checked
	})
}
