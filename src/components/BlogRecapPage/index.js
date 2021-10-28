import Layout from '../Layout';
// import { useUser } from '../App/App.js';
import css from './index.module.css';

const reflections = [
	{
		bootcamperid: 10,
		reflection:
			'Really enjoyed the day, the vibe is good, high morale, we definitely need to work a bit more on the design of the project.    It feels like there is so much more to work on , maybe a bit overwhelming but slowly and with perseverance we keep going forward',
		accessible: true,
		topics: [
			{ topic: 'primitive types', rating: 4 },
			{ topic: 'complex types', rating: 2 },
			{ topic: 'pass by reference', rating: 3 },
			{ topic: 'cognitive load', rating: 5 },
		],
		confidence: 4,
		grateful: 'how awesome this course is',
		improvements: 'complex types, computational thinking',
		overallFeeling: 5,
	},
];

export default function BlogRecapPage() {
	// const user = useUser();
	const date = new Date();
	const today = date.toISOString().slice(0, 10);
	return (
		<Layout>
			<div
				className="flex flex-col items-center justify-center bg-contain mb-3 bg-no-repeat bg-top pr-4 pl-4 pt-3 "
				style={{ backgroundImage: 'url(/images/recapBlogImage.png)' }}
			>
				<form className="justify-center items-center  px-4  flex flex-col  pb-3 shadow-lg  opacity-95  h-full rounded-3xl ">
					<div className={`${"bg-white px-6 py-4 my-6 rounded-2xl border-4 border-green-200 shadow-inner h-full m-2"} ${css.capital}`}>
						<label className="mr-3" htmlFor="start">What day do you want to review? </label>
						<input
							className="rounded text-center border border-green-400 shadow-lg focus:ring-1 ring-blue-400 "
							type="date"
							defaultValue={today}
							id="input"
							name="reflection-date"
							min="2021-01-01"
							max="2021-12-31"
						/>
						<button className="btn btn-sm btn-accent shadow-xl bg-green-400 mb-5 ml-5 ">
							Look up
						</button>
						<br />
						<label htmlFor="topics-section">
							Topics you have covered on Week 4 day 2, and your confidence rating out
							of 5:
						</label>
						<ul className="flex textarea h-20 textarea-bordered textarea-accent justify-around font-bold mt-2 mb-4 ">
							{reflections[0].topics.map((topic, i) => {
								return (
									<li key={i}>
										{topic.topic} - <span className="text-lg">{topic.rating}</span>
									</li>
								);
							})}
						</ul>
						<label htmlFor="confidence-range">
							How confident did you feel about what you've learned since your last
							reflection?
						</label>
						<p className=" textarea h-5 font-bold textarea-accent mt-2 mb-4  ">4/5</p>
						<label htmlFor="improvements">What you needed to work on...</label>
						<p className="improvement textarea h-20 textarea-bordered textarea-accent font-bold mt-2 mb-4  ">
							{reflections[0].improvements}
						</p>

						<label htmlFor="add-thoughts">Other thoughts...</label>
						<p className="reflection textarea textarea-bordered textarea-accent font-bold mt-2 mb-4  ">
							{reflections[0].reflection}
						</p>
						<label htmlFor="feeling-score">How you were feeling?</label>
						<h1>💩</h1>
					</div>
				</form>
			</div>
		</Layout>
	);
}
