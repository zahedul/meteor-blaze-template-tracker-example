Template.selectPicker.helpers({
    tags: function () {
        return Tags.find({status: 'Active'});
    }
});
