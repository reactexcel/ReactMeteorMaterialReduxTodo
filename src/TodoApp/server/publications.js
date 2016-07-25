import { Meteor } from 'meteor/meteor';
import Tasks from 'TodoApp/collections/Tasks';
import { Tracker } from 'meteor/tracker'

// This code only runs on the server
Tracker.autorun(function(){
	Meteor.publish('tasks', function () {
	  return Tasks.find({},{sort: {created_at: -1}});
	});
})
