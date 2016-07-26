import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';



export default class Login extends React.Component {
  static contextTypes = {
        muiTheme: React.PropTypes.object.isRequired
  }
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      conf_password: '',
      signup_dialog: false
    }
    this.login = this.login.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.openDialog = this.openDialog.bind(this)
    this.signup = this.signup.bind(this)
  }
  componentWillMount(){
    let self = this
    Meteor.autorun(function(c) {
      self.autorun = c;
      if (Meteor.userId()) {
        self.props.router.push('/todo')
        c.stop() //only run this one time
      }  
    });    
    this.props.onGetUser()
  }
  componentWillUnmount(){
    this.autorun.stop()
  }
  login(){
    this.props.onLoginUser(this.state.email, this.state.password).then( () => {

    }).catch( (err) => {
        alert(err.toString())
    })
  }
  signup(){
    if(this.state.password !== this.state.conf_password){
      alert('Passwords Dont Match')
    }else{
      this.props.onCreateUser(this.state.email,this.state.password).then( () => {
        this.setState({
          email: '',
          password: '',
          conf_password : '',
          signup_dialog: false
        })
      }).catch( (error) => {
          alert(error.toString())
      })
    }
  }
  openDialog(){
    this.setState({signup_dialog: true})
  }
  handleClose(){
    this.setState({signup_dialog: false})
  }
  render() {
    const actions = [
        <FlatButton
          label="Cancel"
          onTouchTap={this.handleClose}
        />,
        <FlatButton
          label="Submit"
          primary={true}
          keyboardFocused={true}
          onTouchTap={this.handleClose}
        />,
      ];

    return (
        <MuiThemeProvider>
          <div>
            <AppBar
              title={"Login"} 
              iconElementRight={<FlatButton label="SignUp" onTouchTap={this.openDialog} />}
            />
            <Dialog
              title="SignUp"
              titleStyle={{color: this.context.muiTheme.palette.accent1Color}}
              actions={actions}
              modal={false}
              open={this.state.signup_dialog}
              onRequestClose={this.handleClose}
            >
             

              <div style={{width: 320, margin: '0px auto', paddingTop: 20}}>
                    <div>
                      <TextField 
                        style={{width: '100%'}}
                        onChange={ (evt) => {  this.setState({email: evt.target.value}) }}
                        value={this.state.email}
                        floatingLabelText="Email" />
                    </div>
                    <div>
                      <TextField 
                        style={{width: '100%'}}
                        onChange={ (evt) => {  this.setState({password: evt.target.value}) }}
                        type="password"
                        value={this.state.passowrd}
                        floatingLabelText="Password" />
                    </div>

                    <div>
                      <TextField 
                        style={{width: '100%'}}
                        onChange={ (evt) => {  this.setState({conf_password: evt.target.value}) }}
                        type="password"
                        value={this.state.passowrd}
                        floatingLabelText="Confirm Password" />
                    </div>

                    <div style={{textAlign: 'right'}}>
                      <RaisedButton label="SIGNUP" secondary={true} onTouchTap={this.signup} />
                    </div>

                </div>


          </Dialog>

            <div style={{textAlign: 'center'}}>
                <div style={{width: 320, margin: '0px auto', paddingTop: 20}}>
                    <div style={
                        {
                          fontFamily: this.context.muiTheme.fontFamily, 
                          color: this.context.muiTheme.palette.accent1Color,
                          textAlign: 'left'
                        }
                    }>Login</div>
                    <div>
                      <TextField 
                        style={{width: '100%'}}
                        onChange={ (evt) => {  this.setState({email: evt.target.value}) }}
                        value={this.state.email}
                        floatingLabelText="Email" />
                    </div>
                    <div>
                      <TextField 
                        style={{width: '100%'}}
                        onChange={ (evt) => {  this.setState({password: evt.target.value}) }}
                        type="password"
                        value={this.state.passowrd}
                        floatingLabelText="Password" />
                    </div>

                    <div style={{textAlign: 'right'}}>
                      <RaisedButton label="LOGIN" secondary={true} onTouchTap={this.login} />
                    </div>

                </div>
            </div>
          </div>
        </MuiThemeProvider>
  );
}
};

Login.propTypes = {
  onCreateUser: React.PropTypes.func.isRequired,
  onLoginUser: React.PropTypes.func.isRequired,
  onGetUser : React.PropTypes.func.isRequired
}