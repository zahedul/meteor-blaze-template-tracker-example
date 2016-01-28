Template.select2.onRendered(function () {

});

Template.select2.helpers({
    tags: function () {
        return Tags.find({status: 'Active'});
    }
});

Template.select2.events({

});
