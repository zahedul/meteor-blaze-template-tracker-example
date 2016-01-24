Meteor.methods({
    /**
     * Add Tag
     * Access : admin,manager
     * @param {String} tagName Tag name
     * @returns {String|Meteor.error} tagId|Meteor.error
     */
    addTag: function (tagName) {
        try {
            check(tagName, String);
            var _id = Tags.insert({name: tagName});
            if (_id) {
                return _id;
            }
        } catch (e) {
            throw new Meteor.Error(400, e.message);
        }

    },
    /**
     * Edit existing tag
     * Access : admin,manager
     * @param {String} tagId _id
     * @param {String} tagName Tag Name
     * @returns {String|Meteor.error} tagId|Meteor.error
     */
    editTag: function (tagId, tagName) {
        try {
            check(tagId, String);
            check(tagName, String);
            var isUpdate = Tags.update(tagId, { $set: {name: tagName} });
            if (isUpdate) {
                return isUpdate;
            }
        } catch (e) {
            throw new Meteor.Error(400, e.message);
        }

    },
    /**
     * Change Tag Status
     * Access : admin,manager
     * @param {String} tagId _id of document
     * @param {String} status [Active,Archive,Inactive]
     */
    changeTagStatus: function (tagId, status) {
        try {
            check(tagId, String);
            check(status, String);
            var isUpdate = Tags.update(tagId, {$set : {status: status}});
            if (isUpdate) {
                return isUpdate;
            }
        } catch (e) {
            throw new Meteor.Error(400, e);
        }
    }
});
