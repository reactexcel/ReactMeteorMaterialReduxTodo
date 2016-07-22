import  React  from 'react';

import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';


export default class TodoList extends React.Component {
  constructor(props){
    super(props);
    this.todoCheck = this.todoCheck.bind(this)
  }
  todoCheck(todo) {
      this.props.onCheckTodo(todo.id)
  }
  render() {
    let todoList = this.props.todos.map( (todo,i) => {
      console.log(todo)
        return (
          <ListItem leftCheckbox={<Checkbox onCheck={ () => { this.todoCheck(todo) }} checked={todo.checked} />} primaryText={todo.text} key={i}></ListItem>
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
  onCheckTodo: React.PropTypes.func.isRequired
}
