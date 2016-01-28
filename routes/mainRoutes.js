// Router.route('/', function () {
//  this.render('home');
//  SEO.set({ title: 'Home -' + Meteor.App.NAME });
// });
FlowRouter.route("/", {
    name: "index",
    subscriptions: function () {
        this.register("tagList", Meteor.subscribe("tagList"));
    },

    action: function () {
        BlazeLayout.render("appLayout", { content: "home" });
    }
});
