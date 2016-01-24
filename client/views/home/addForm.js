
Template.addForm.onRendered(function () {
    var self = this;
    // FlowRouter.subsReady("tagList", function () {
    //     //$('.edit-tagname').editable({mode: 'inline'});
    // });
});

Template.addForm.helpers({
    tags: function () {
        return Tags.find();
    },
    createdAtFormatted: function () {
        return moment(this.createdAt).format("llll");
    },
    cssStatus: function () {
        if (this.status === 'Active') {
            return 'text-success';
        }

        return 'text-danger';
    },
    isActiveStatus: function () {
        return (this.status === 'Active');
    }
});

Template.addForm.events({
    'submit #tag-form': function (event) {
        event.preventDefault();
        var tagName = $('#tagName').val();
        if (tagName !== '') {
            Meteor.call('addTag', tagName, function (error, data) {
                if (error) {
                    sAlert.error(error);
                } else {
                    sAlert.success('New Tag added successfully');
                    $('#tagName').val("");
                }
            });
        } else {
            sAlert.warning("Empty Tag Name not allowed");
        }
    }
});
