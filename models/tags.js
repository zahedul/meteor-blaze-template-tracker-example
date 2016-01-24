Schemas = {}
Tags = new Mongo.Collection("tags");

Schemas.Tag = new SimpleSchema({
    name: {
        type: String
    },
    status: {
        type: String,
        allowedValues: ['Active', 'Inactive', 'Archive'],
        defaultValue: 'Active',
        optional: true
    },
    createdAt: {
        type: Date,
        autoValue: function () {
            if (this.isInsert) {
                return new Date();
            }
            if (this.isUpsert) {
                return {$setOnInsert: new Date()};
            }
            this.unset();
        },
        denyUpdate: true,
        optional: true
    },
    updatedAt: {
        type: Date,
        autoValue: function () {
            if (this.isUpdate) {
                return new Date();
            }
        },
        denyInsert: true,
        optional: true
    }
});

Tags.attachSchema(Schemas.Tag);
