if (Meteor.isClient) {
	// counter starts at 0
	Session.setDefault('counter', 0);

	Template.interests.helpers({
		counter: function () {
			return Session.get('counter');
		}
	});

	Template.interests.events({
		'click button': function () {
			// increment the counter when button is clicked
			Session.set('counter', Session.get('counter') + 1);
		}
	});

	Template.interestList.helpers({
		interestEntries: [
			{name: 'Animals'},
			{name: 'Cancer Research'},
			{name: 'Cancer Research2'}
		]
	});
}

if (Meteor.isServer) {
	Meteor.startup(function () {
		// code to run on server at startup
	});
}
