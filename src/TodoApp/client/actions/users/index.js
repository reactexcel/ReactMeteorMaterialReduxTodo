import { createAction } from 'redux-actions';

export const ADD_USER = "ADD_USER";
export const LOGIN_USER = "LOGIN_USER"
export const GET_USER = "GET_USER";


export function createUser(email,password){
	return function (dispatch,getState){
		return new Promise( (resolve,reject) => {
			Meteor.call('user.create',email,password, (err,id) => {
				if(err){
					reject(err)
				}else{
					let user = {
						email: email,
						password: password
					}
					Meteor.loginWithPassword(email,password)
					dispatch(createUserAction(user))
					resolve(user)
				}
			});
		}) 
	} 
}

export function createUserAction(data){
	return createAction(ADD_USER)(data)
}

export function loginUser(email,password){
	return function (dispatch,getState){
		return new Promise( (resolve,reject) => {
			Meteor.loginWithPassword(email,password, (err) => {
				if(err){
					reject(err)
				}else{
					let user = {
						email: email,
						password: password
					}
					dispatch(createUserAction(user))
					resolve(user)
				}
			});
		}) 
	} 
}

export function createLoginAction(data){
	return createAction(LOGIN_USER)(data)
}



export function getUser(){
	return createAction(GET_USER)(Meteor.user())
}