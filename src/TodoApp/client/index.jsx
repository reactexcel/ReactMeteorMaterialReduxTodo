import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

import TodoContainer from './containers/Todo';
import LoginContainer from './containers/Login';
import store from './store/index'
import { Provider } from 'react-redux'

import { Router, Route, browserHistory } from 'react-router'


import injectTapEventPlugin from 'react-tap-event-plugin';
 
// Needed for onTouchTap 
// http://stackoverflow.com/a/34015469/988941 
injectTapEventPlugin();


Meteor.startup(function () {
  // Use Meteor.startup to render the component after the page is ready
  ReactDOM.render( 
  		<Provider store={store}>
  			<Router history={browserHistory}>
  				<Route path="/todo" component={TodoContainer}></Route>
  				<Route path="/" component={LoginContainer}></Route>
  			</Router>
  		</Provider>
  , document.getElementById("render-target"));
});
