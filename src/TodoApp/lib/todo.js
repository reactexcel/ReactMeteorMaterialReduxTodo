import { Meteor } from 'meteor/meteor';
import Tasks from 'TodoApp/collections/Tasks';
import { check } from 'meteor/check'

Meteor.methods({
  'todo.insert' : function(text) {
    // Make sure the user is logged in before inserting a task
    // if (! Meteor.userId()) {
    //   throw new Meteor.Error('not-authorized');
    // }
    //check(text, String)
    let todo = {
          text: text,
          checked: false,
          created_at : new Date()
    } 
    
    let id = Tasks.insert(todo)
    todo.id = id;
    return todo
  },
  'todo.delete': function (taskId) {
    var task = Tasks.findOne(taskId);
    check(taskId, String)
    // if (task.private && task.owner !== Meteor.userId()) {
    //   // If the task is private, make sure only the owner can delete it
    //   throw new Meteor.Error('not-authorized');
    // }

    Tasks.remove(taskId);
  },
  'todo.mark': function (taskId, setChecked) {
    // var task = Tasks.findOne(taskId);
    // if (task.private && task.owner !== Meteor.userId()) {
    //   // If the task is private, make sure only the owner can check it off
    //   throw new Meteor.Error('not-authorized');
    // }

    Tasks.update(taskId, { $set: { checked: setChecked} });
  }
});
