import { Meteor } from 'meteor/meteor';
import Tasks from 'TodoApp/collections/Tasks';

Meteor.methods({
  addTask: (text) => {
    // Make sure the user is logged in before inserting a task
    // if (! Meteor.userId()) {
    //   throw new Meteor.Error('not-authorized');
    // }

    Tasks.insert({
      text: text,
      createdAt: new Date(),
      checked : false
      // owner: Meteor.userId(),
      // username: Meteor.user().username
    });
  },
  deleteTask: function (taskId) {
    var task = Tasks.findOne(taskId);
    // if (task.private && task.owner !== Meteor.userId()) {
    //   // If the task is private, make sure only the owner can delete it
    //   throw new Meteor.Error('not-authorized');
    // }

    Tasks.remove(taskId);
  },
  setChecked: function (taskId, setChecked) {
    // var task = Tasks.findOne(taskId);
    // if (task.private && task.owner !== Meteor.userId()) {
    //   // If the task is private, make sure only the owner can check it off
    //   throw new Meteor.Error('not-authorized');
    // }

    Tasks.update(taskId, { $set: { checked: setChecked} });
  }
});
