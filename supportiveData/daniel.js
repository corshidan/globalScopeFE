const bootcamperTable = {
	id: 'SERIAL_PRIMARY_KEY',
	fullName: 'Daniel Corseanschi',
	bootcamperId: 6666,
	frequency: 3,
	courseStartDate: '26/07/2021',
};
const reflections = [
	{
		bootcamperId: 6666,
		createdAt: '26/07/2021',
		reflection: `Really enjoyed the day, the vibe is good, high morale, we definitely need to work a bit more on the design of the project.    It feels like there is so much more to work on , maybe a bit overwhelming but slowly and with perseverance we keep going forward`,
		topicsPicked: [
			{ topic: 'primitive types', rating: 4 },
			{ topic: 'complex types', rating: 2 },
			{ topic: 'pass by reference', rating: 3 },
			{ topic: 'cognitive load', rating: 5 },
		],
		confidenceRating: 4,
		gratefulFor: 'how awesome this course is',
		areaOfImprovement: 'complex types, computational thinking',
		overallFeeling: 5,
	},
];

// const test = JSON.stringify(reflections[0].topicsPicked[0]);
// const test2 = reflections[0].topicsPicked[0];
// const test3 = JSON.parse(test);
// console.log(test, typeof test, typeof test2);
// console.log(reflections);
//Nothing to see here
