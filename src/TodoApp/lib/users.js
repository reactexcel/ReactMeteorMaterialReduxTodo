import Tasks from 'TodoApp/collections/Tasks';
import { check } from 'meteor/check'
import { Accounts } from 'meteor/accounts-base';

Meteor.methods({
  'user.create' : function(email,password) {
    // Make sure the user is logged in before inserting a task
    // if (! Meteor.userId()) {
    //   throw new Meteor.Error('not-authorized');
    // }
    check(email, String)
    check(password, String)
    return Accounts.createUser({
      email: email,
      username: email,
      password: password
    })  
  }

})

