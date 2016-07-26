import React from 'react';

import { connect } from 'react-redux';

import Login from './../components/Login'
 
import * as todo_actions from './../actions/todo/index'
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

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
        
     }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer)