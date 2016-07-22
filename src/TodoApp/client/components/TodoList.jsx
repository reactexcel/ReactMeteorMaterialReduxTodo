import  React  from 'react';

import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';


export default class TodoList extends React.Component {
  constructor(props){
    super(props);
    this.todoCheck = this.todoCheck.bind(this)
    this.taskSub = false;
  }
  componentWillMount(){
    this.taskSub = Meteor.subscribe('tasks')
    let self = this
    Meteor.autorun(function() {
      //this will wait for subscription to get ready
      if (self.taskSub.ready()) {
        self.props.onFetchTodo() 
      }  
    });    
  }
  componentWillUnmount(){
    this.taskSub.stop()
  }
  todoCheck(todo) {
      this.props.onCheckTodo(todo._id, !todo.checked)
  }
  render() {
    let todoList = this.props.todos.map( (todo,i) => {
        return (
          <ListItem leftCheckbox={<Checkbox onCheck={ () => { this.todoCheck(todo) }} checked={todo.checked} />} primaryText={todo.text} key={todo._id}></ListItem>
        )
    })
    return (
        <List>
            {todoList}
        </List>
        
    );
  }
};

TodoList.propTypes = {
  todos: React.PropTypes.any.isRequired,
  onCheckTodo: React.PropTypes.func.isRequired,
  onFetchTodo: React.PropTypes.func.isRequired
}
