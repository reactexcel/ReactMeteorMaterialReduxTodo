import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';



import TodoList from './TodoList'

export default class TodoMain extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open : false,
      current_task: ''
    }
    this.addTodo = this.addTodo.bind(this)
    this.submitTodo = this.submitTodo.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }
  addTodo() {
    this.setState({open: true});
  }
  handleClose(){
    this.setState({open: false});
  }
  submitTodo(){
    this.props.onAddTodo(this.state.current_task)
    this.setState({
      current_task: ''
    })
    this.handleClose()
  }
  render() {
     const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.submitTodo}
      />,
    ];

    return (
        <MuiThemeProvider>
          <div>
            <AppBar
              title="Todo List"
              iconElementRight={<FlatButton label="Add" onTouchTap={this.addTodo} />}
            />
            <TodoList onCheckTodo={this.props.onCheckTodo} todos={this.props.todos}/>
            <Dialog
              title="Add Todo"
              actions={actions}
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose}
            >
              <TextField
              hintText="Task"
              floatingLabelText="Enter Your Task"
              value={this.state.current_task}
              onChange={  (event) => {
                this.setState({
                  current_task: event.target.value
                })
              }}
            />
            </Dialog>
          </div>
        </MuiThemeProvider>
    );
  }
};

TodoMain.propTypes = {
  todos: React.PropTypes.any.isRequired,
  ui: React.PropTypes.any.isRequired,
  onAddTodo: React.PropTypes.func.isRequired,
  onCheckTodo: React.PropTypes.func.isRequired
}