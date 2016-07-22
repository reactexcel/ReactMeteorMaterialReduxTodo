import  React  from 'react';

import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';


export default class TodoList extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    let todoList = this.props.todos.map( (todo,i) => {
        return (
          <ListItem leftCheckbox={<Checkbox />} primaryText={todo.text} key={i}></ListItem>
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
  todos: React.PropTypes.any.isRequired
}
