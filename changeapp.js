if (Meteor.isClient) {
	pageOrder = ['interests', 'non-profits'];

	Template.interests.helpers({
		heading: {
			text: "Select the causes you're interested in."
		}
	});

	Template.interests.events({
		'click .next-button': function (event) {
			$('.interests').animate({})
		}
	});

	Template.interestList.helpers({
		interestEntries: [
			{name: 'Animals'},
			{name: 'Cancer Research'},
			{name: 'Multiple Sclerosis Research'},
			{name: 'AIDS Research'},
			{name: 'Transportation'},
			{name: 'Reliable Energy'},
			{name: 'Gender Equality'},
			{name: 'Nature Preservation'},
			{name: 'Climate Change'},
			{name: 'Education'},
			{name: 'Domestic Abuse'},
			{name: 'Homelessness'}
		]
	});

	Template.interestEntry.events({
		"click .fa-square": function (event) {
			$(event.target).toggleClass('selected');
		}
	});

	Template.nonProfits.helpers({
		heading: {
			text: "Select the non-profits you're interested in."
		}
	});
}

if (Meteor.isServer) {
	Meteor.startup(function () {
		// code to run on server at startup
	});
}
