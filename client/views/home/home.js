Template.home.onRendered(function () {
    FlowRouter.subsReady("tagList", function () {
        $('.edit-tagname').editable({mode: 'inline'});
    });
});

Template.home.helpers({
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

Template.home.events({
    'click .editable-submit': function (event) {
        var self = this,
            newValue;
        event.preventDefault();
        console.log(self);
        newValue = $(event.target).parents('.editableform').find('div.editable-input > input').val();
        if (newValue !== self.name && newValue !== '') {
            Meteor.call('editTag', self._id, newValue, function (error) {
                if (error) {
                    sAlert.error(error);
                } else {
                    sAlert.success('Tag edited successfully');
                }
            });
        }
    },
    'click .do-archive': function (event) {
        var self = this;
        event.preventDefault();
        bootbox.confirm("Are you sure you want to archive <strong>" + self.name + "</strong> tag?", function (result) {
            if (result === true) {
                Meteor.call('changeTagStatus', self._id, 'Archive', function (error) {
                    if (error) {
                        sAlert.error(error);
                    } else {
                        Meteor.call('log', 'info', 'tag is removed : ' + self._id);
                        sAlert.success('Tag archived successfully');
                    }
                });
            }
        });
    },
    'click .do-active': function (event) {
        var self = this;
        event.preventDefault();
        bootbox.confirm("Are you sure you want to active <strong>" + self.name + "</strong> tag?", function (result) {
            if (result === true) {
                Meteor.call('changeTagStatus', self._id, 'Active', function (error) {
                    if (error) {
                        sAlert.error(error);
                    } else {
                        sAlert.success('Tag activated successfully');
                    }
                });
            }
        });
    }
});
