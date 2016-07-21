import { Component } from 'react';
import ReactMixin from 'react-mixin';

import Tasks from 'TodoApp/collections/Tasks';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import FlatButton from 'material-ui/FlatButton';


export default class TodoMain extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
        <MuiThemeProvider>
          <div>
            <AppBar
              title="Todo List"
              iconClassNameRight="muidocs-icon-navigation-expand-more"
              iconElementRight={<FlatButton label="Add" />}
            />
            <List>
                <ListItem leftCheckbox={<Checkbox />} primaryText="Task1"></ListItem>
            </List>
          </div>
        </MuiThemeProvider>
    );
  }
};
