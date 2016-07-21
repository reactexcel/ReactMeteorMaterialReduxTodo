import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

import TodoApp from './components/TodoApp';

import 'TodoApp/methods';

Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});

import injectTapEventPlugin from 'react-tap-event-plugin';
 
// Needed for onTouchTap 
// http://stackoverflow.com/a/34015469/988941 
injectTapEventPlugin();


Meteor.startup(function () {
  // Use Meteor.startup to render the component after the page is ready
  ReactDOM.render(<TodoApp />, document.getElementById("render-target"));
});
