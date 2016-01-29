Meteor.publish("tagList", function () {
    return Tags.find();
});
