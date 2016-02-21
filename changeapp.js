if (Meteor.isClient) {
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
}

if (Meteor.isServer) {
	Meteor.startup(function () {
		// code to run on server at startup
	});
}
