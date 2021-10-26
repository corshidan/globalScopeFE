import Layout from "../Layout";

const reflections = [
  {
    bootcamperid: 10,
    reflection:
      "Really enjoyed the day, the vibe is good, high morale, we definitely need to work a bit more on the design of the project.    It feels like there is so much more to work on , maybe a bit overwhelming but slowly and with perseverance we keep going forward",
    accessible: true,
    topics: [
      { topic: "primitive types", rating: 4 },
      { topic: "complex types", rating: 2 },
      { topic: "pass by reference", rating: 3 },
      { topic: "cognitive load", rating: 5 },
    ],
    confidence: 4,
    grateful: "how awesome this course is",
    improvements: "complex types, computational thinking",
    overallFeeling: 5,
  },
];

export default function BlogRecapPage() {
  return (
    <Layout>
      <form className="border-2">
        <div className=" -x-4">
          <label for="start">What day do you want to review? </label>
          <input
            type="date"
            id="start"
            name="reflection-date"
            value="2021-07-22"
            min="2021-01-01"
            max="2021-12-31"
          />
          <button className="btn btn-sm btn-accent mb-5">Submit</button>
        </div>
        <div className="flex flex-col border-4">
          <label htmlFor="topics-section">
            Topics you have covered on Week 4 day 2, and your confidence rating
            out of 5:
          </label>
          <div className="">
            <ul className="flex textarea h-15 textarea-bordered textarea-accent justify-between">
              {reflections[0].topics.map((topic) => {
                return (
                    <li>
                      {topic.topic} - {topic.rating}
                    </li>
                );
              })}
            </ul>
          </div>
          <div className="flex flex-col border-4">
            <label htmlFor="confidence-range">
              How confident do you feel about what you've learned since your
              last reflection?
            </label>
            <p className="confidentP textarea h-10 textarea-bordered textarea-accent">
              4/5
            </p>
          </div>
          <div className="flex flex-col border-4">
            <label htmlFor="improvements">What you needed to work on...</label>
            <p className="improvement textarea h-18 textarea-bordered textarea-accent">
              {reflections[0].improvements}
            </p>
          </div>
          <div className="flex flex-col border-4">
            <label htmlFor="add-thoughts">Any other thoughts?:</label>
            <p className="reflection textarea h-24 textarea-bordered textarea-accent">
              {reflections[0].reflection}
            </p>
          </div>
          <div className="flex flex-col border-4">
            <label htmlFor="feeling-score">How you were feeling?</label>
            <h1>💩</h1>
          </div>
        </div>
      </form>
    </Layout>
  );
}
