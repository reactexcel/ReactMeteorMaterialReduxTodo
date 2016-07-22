import React from 'react';

import { connect } from 'react-redux';

import TodoApp from './../components/TodoApp'
 
import * as todo_actions from './../actions/todo/index'


class TodoContainer extends React.Component {
	constructor(props){
		super(props);
    
	}
	render() {
	    return ( 
          <TodoApp ui={this.props.ui} todos={this.props.entities} onAddTodo={this.props.addTodo} />
      )
  }
}


function mapStateToProps(state,props){
  state = state.toJS()    
  return {
    ui: state.ui,
    entities: state.entities
  }
}
const mapDispatchToProps = (dispatch) => {   //es6 way
     return {
        addTodo: (text) => {
            dispatch(todo_actions.addTodo(text))
        }
     }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoContainer)