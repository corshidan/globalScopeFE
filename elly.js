const bootcamperTable = {
  fullName: "Elly Durrant",
  bootcamperId: "1234",
  frequency: "4",
  courseStartDate: "26/07/21",
};

const reflections = [
  {
    bootcamperId: "1234",
    createdAt: "30/07/21",
    reflection:
      "Today was really interesting, researching node-postgres via the docs, and then using this to create a server that can make requests to a database. I can see the benefit of looking through the docs thoroughly, but I think the skill will be searching the docs efficiently to find the key parts of the package that will actually be of use, as we ended up spending too much time reading the docs and didn’t complete many tasks in time.",
    isAccessible: true,
    topicsPicked: [
      { topic: "Express", rating: 2 },
      { topic: "Postgress", rating: 3 },
      { topic: "Heroku", rating: 3 },
      { topic: "Restful APIs", rating: 2 },
    ],
    confidenceRating: 3,
    gratefulFor: "My pair for being supportive",
    areaOfImprovement: "finish off the express-postgress workshop",
    overallFeeling: 6,
  },
  {
    bootcamperId: "1234",
    createdAt: "22/08/21",
    reflection:
      "There was a lot to learn today, and I understood it when we were going through it in the lessons, but in the workshops I couldn’t remember any of the steps and got lost for most of it. Really need to practise!",
    isAccessible: true,
    topicsPicked: [
      { topic: "Intro to NPM", rating: 4},
      { topic: "Using require to import modules", rating: 3 },
      { topic: "Exporting modules", rating: 3 },
      { topic: "Create a super basic server", rating: 2 },
    ],
    confidenceRating: 3,
    gratefulFor: "Code club after school",
    areaOfImprovement: "Re-do express workshops",
    overallFeeling: 3,
  },
];
