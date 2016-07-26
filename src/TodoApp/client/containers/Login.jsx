import React from 'react';

import { connect } from 'react-redux';

import Login from './../components/Login'
 
import * as login_actions from './../actions/users/index'
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {withRouter} from 'react-router'


class LoginContainer extends React.Component {
	constructor(props){
		super(props);
    
	}
  getChildContext() {
      return { muiTheme: getMuiTheme(baseTheme) };
  }

	render() {

	    return ( 
          <Login 
            ui={this.props.ui}
            onCreateUser={this.props.createUser}
            onLoginUser={this.props.loginUser}
            router={this.props.router}
            />
      )
  }
}

LoginContainer.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};


function mapStateToProps(state,props){
  state = state.toJS()    
  return {
    ui: state.ui
  }
}
const mapDispatchToProps = (dispatch) => {   //es6 way
     return {
        createUser: (email,password) => {
            return dispatch(login_actions.createUser(email,password))
        },
        loginUser: (email,password) => {
          return dispatch(login_actions.loginUser(email,password))
        }
     }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer))