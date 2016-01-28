Template.select2.onRendered(function () {
    var self = this;

    self.autorun(function () {
        $('#select2').select2();
    });
});

Template.select2.helpers({
    tags: function () {
        return Tags.find({status: 'Active'});
    }
});

Template.select2.events({

});
