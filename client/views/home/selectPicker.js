Template.selectPicker.onRendered(function () {
    var self = this;

    self.autorun(function () {
        $('#selectPicker').selectpicker();
    });
});

Template.selectPicker.helpers({
    tags: function () {
        return Tags.find({status: 'Active'});
    }
});
