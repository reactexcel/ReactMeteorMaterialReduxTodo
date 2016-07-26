import { Mongo } from 'meteor/mongo';
import '../lib/todo';
import '../lib/users';


const Tasks = new Mongo.Collection("tasks");

export default Tasks;
