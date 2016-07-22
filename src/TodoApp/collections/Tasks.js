import { Mongo } from 'meteor/mongo';
import '../lib/todo';


const Tasks = new Mongo.Collection("tasks");

export default Tasks;
