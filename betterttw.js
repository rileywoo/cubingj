if (Meteor.isClient) {
  Template.angel.helpers({
    lim: function() {
      return 'lim';
    }
  });
  Template.tim.helpers({
    wong: function() {
      return 'wong';
    }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
