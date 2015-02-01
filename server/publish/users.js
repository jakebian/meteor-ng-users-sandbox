Meteor.publish("users.all", function () {
    return Meteor.users.find({},{limit:40,fields:{friends:0}});
});
