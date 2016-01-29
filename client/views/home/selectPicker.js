Template.selectPicker.onCreated(function () {
    var self = this;
});

Template.selectPicker.onRendered(function () {
    var self = this, tags;
    $('#selectPicker').selectpicker();

    self.autorun(function () {
        tags = Tags.find({status: 'Active'}).fetch();
        console.log('selectPicker: ' + moment().format('llll'));
        $('#selectPicker').selectpicker('refresh');
    });
});

Template.selectPicker.helpers({
    tags: function () {
        return Tags.find({status: 'Active'});
    }
});
