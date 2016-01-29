Template.select2.onRendered(function () {
    var self = this;

    $('#select2').select2();
    self.autorun(function () {
        tags = Tags.find({status: 'Active'}).fetch();
        console.log('select2: ' + moment().format('llll'));
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
