import  React  from 'react';

import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import Delete from 'material-ui/svg-icons/action/delete';
import CircularProgress from 'material-ui/CircularProgress';



export default class TodoList extends React.Component {
  constructor(props){
    super(props);
    this.todoCheck = this.todoCheck.bind(this)
    this.taskSub = false;
    this.deleteTodo = this.deleteTodo.bind(this)
  }
  componentWillMount(){
    this.taskSub = Meteor.subscribe('tasks')
    let self = this
    self.props.onLoading(true)
    Meteor.autorun(function() {
      //this will wait for subscription to get ready
      if (self.taskSub.ready()) {
        self.props.onFetchTodo() 
        self.props.onLoading(false)
      }  
    });    
  }
  componentWillUnmount(){
    this.taskSub.stop()
  }
  todoCheck(todo) {
      this.props.onCheckTodo(todo._id, !todo.checked)
  }
  deleteTodo(todo){
      this.props.onDeleteTodo(todo._id)
  }
  render() {

    let todoList = this.props.todos.map( (todo,i) => {
        return (
          <ListItem leftCheckbox={<Checkbox 
            onCheck={ () => { this.todoCheck(todo) }} 
            checked={todo.checked} />} 
            rightIconButton={<IconButton onTouchTap={  () => {   this.deleteTodo(todo)  } } tooltip="Delete"><Delete/></IconButton>}
            primaryText={todo.text} key={todo._id}></ListItem>
        )
    })
    let loading = ''
    if(this.props.ui.loading){
      loading = <CircularProgress />;
    }
    return (
        <div>
        {loading}
        <List>
            {todoList}
        </List>
        </div>
    );
  }
};

TodoList.propTypes = {
  todos: React.PropTypes.any.isRequired,
  onCheckTodo: React.PropTypes.func.isRequired,
  onFetchTodo: React.PropTypes.func.isRequired,
  onDeleteTodo: React.PropTypes.func.isRequired
}
