Tasks = new mongo.Colletion("tasks');

if (Meteor.ifClient) {
// This code runs only on the client side.

Meteor.subscribe("tasks");

Templage.body.helpers({
 tasks: function() {
  if (Session.get("hideCompleted")) {
   //If hide completed is checked, filter tasks
   return Tasks.find({checked: {$ne: true}}, {sort: {createdAt: -1}}
   );
   } else {
        //Otherwise, return all of the tasks
        return Tasks.find({}, {sort: {createdAt: -1}});
        }
        }
        );
