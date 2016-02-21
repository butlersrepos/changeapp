Transitioner.transition({
	fromRoute: 'interests',
	toRoute: 'nonProfits',
	velocityAnimation: {
		in: 'transition.pushRightIn',
		out: 'transition.pushLeftOut'
	}
});

$.Velocity.RegisterEffect('transition.pushRightIn',
	{
		defaultDuration: 500,
		calls: [
			[{translateX: ['0%', '100%'], translateZ: 0, easing: "ease-in-out", opacity: [1, 1]}]
		]
	});
$.Velocity.RegisterEffect('transition.pushLeftOut',
	{
		defaultDuration: 500,
		calls: [
			[{translateX: ['-100%', '0%'], translateZ: 0, easing: "ease-in-out", opacity: [1, 1]}]
		]
	});
$.Velocity.RegisterEffect('transition.pushLeftIn',
	{
		defaultDuration: 500,
		calls: [
			[{translateX: ['0%', '-100%'], translateZ: 0, easing: "ease-in-out", opacity: [1, 1]}]
		]
	});

$.Velocity.RegisterEffect('transition.pushRightOut',
	{
		defaultDuration: 500,
		calls: [
			[{translateX: ['100%', '0%'], translateZ: 0, easing: "ease-in-out", opacity: [1, 1]}]
		]
	});