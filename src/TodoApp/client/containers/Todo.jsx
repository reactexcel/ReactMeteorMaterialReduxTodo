import React from 'react';

import { connect } from 'react-redux';

import TodoApp from './../components/TodoApp'
 
import * as login_actions from './../actions/users/index'
import * as todo_actions from './../actions/todo/index'

import {withRouter} from 'react-router'
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


class TodoContainer extends React.Component {
	constructor(props){
		super(props);
    
	}
  getChildContext() {
      return { muiTheme: getMuiTheme(baseTheme) };
  }
	render() {
	    return ( 
          <TodoApp 
            ui={this.props.ui} 
            todos={this.props.todos} 
            users={this.props.users}
            onAddTodo={this.props.addTodo} 
            onCheckTodo={this.props.checkTodo}
            onFetchTodo={this.props.fetchTodo}
            onDeleteTodo={this.props.deleteTodo}
            onLoading={this.props.loading}
            router={this.props.router}
            onGetUser={this.props.getUser}
            />
      )
  }
}
TodoContainer.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};


function mapStateToProps(state,props){
  state = state.toJS()    
  return {
    ui: state.ui,
    todos: state.todos,
    users: state.users
  }
}
const mapDispatchToProps = (dispatch) => {   //es6 way
     return {
        addTodo: (text) => {
            return dispatch(todo_actions.addTodo(text))
        },
        checkTodo: (id,checked) => {
            return dispatch(todo_actions.checkTodo(id,checked))
        },
        fetchTodo: () => {
            return dispatch(todo_actions.fetchTodo())
        },
        deleteTodo: (id) => {
            return dispatch(todo_actions.deleteTodo(id))
        },
        loading: (show) => {
            return dispatch(todo_actions.loading(show))
        },
        getUser: () => {
            return dispatch(login_actions.getUser())
        }
     }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoContainer))