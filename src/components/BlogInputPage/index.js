import Layout from '../Layout';
import { useForm } from 'react-hook-form';
// import { useHistory } from 'react-router-dom';
export default function BlogInputPage() {
	const topicInputStyle = 'w-2/3 mr-1 border pl-2 bg-gray-100 rounded';
	const topicRatingStyle = 'w-1/6 border bg-gray-100 rounded pr-1';
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const user = { bootcamperid: 2 };
	// const history = useHistory();
	// const url = 'https://global-scope.herokuapp.com/reflections';
	const onSubmit = (data) => {
		const newReflection = {
			bootcamperid: user.bootcamperid,
			reflection: data.reflection,
			accessible: data.accessible,
			topics: [
				{ topic: data.firsttopic, rating: data.firstrating },
				{ topic: data.secondtopic, rating: data.secondrating },
				{ topic: data.thirdtopic, rating: data.thirdrating },
				{ topic: data.fourthtopic, rating: data.fourthrating },
			],
			confidence: data.confidence,
			grateful: data.grateful,
			improvements: data.improvements,
			overallfeeling: data.overallfeeling,
		};
		console.log(newReflection);
	};
	return (
		<Layout>
			<form
				className=" flex flex-col p-3 h-full container pt-5"
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className="flex flex-col border-2 p-2 mb-2">
					{/* Topics covered */}
					<label htmlFor="topics-section" className="m-2">
						What topics have you covered since you were last here? Rate your confidence
						for each from 1-5:
					</label>
					<div className="flex justify-center items-center">
						<div className="flex flex-col">
							{/* First topic */}
							<div>
								<label htmlFor="topicOne"></label>
								<input
									id="topicOne"
									name="firsttopic"
									list="topics"
									placeholder="The first topic was..."
									className={topicInputStyle}
									{...register('firsttopic', {
										required: 'Topic is required',
									})}
								/>
								<label htmlFor="ratingTopicOne"></label>
								<input
									type="number"
									id="ratingTopicOne"
									name="firstrating"
									min="1"
									max="5"
									className={topicRatingStyle}
									{...register('firstrating', {
										required: 'Rating is required',
									})}
								></input>
							</div>
							<div>
								{errors.firsttopic && (
									<p className="text-red-400 text-sm">
										{errors.firsttopic.message}
									</p>
								)}
								{errors.firstrating && (
									<p className="text-red-400 text-sm">
										{errors.firstrating.message}
									</p>
								)}
							</div>
						</div>
						{/* Topic two */}

						<div className="flex flex-col">
							<div>
								<label htmlFor="topicTwo"></label>
								<input
									id="topicTwo"
									name="secondtopic"
									list="topics"
									placeholder="And..."
									className={topicInputStyle}
									{...register('secondtopic', {
										required: 'Topic is required',
									})}
								/>
								<label htmlFor="ratingTopicTwo"></label>
								<input
									type="number"
									id="ratingTopicTwo"
									name="secondrating"
									min="1"
									max="5"
									className={topicRatingStyle}
									{...register('secondrating', {
										required: 'Rating is required',
									})}
								></input>
							</div>
							<div>
								{errors.secondtopic && (
									<p className="text-red-400 text-sm">
										{errors.secondtopic.message}
									</p>
								)}
								{errors.secondrating && (
									<p className="text-red-400 text-sm">
										{errors.secondrating.message}
									</p>
								)}
							</div>
						</div>
						{/* Topic three */}

						<div className="flex flex-col">
							<div>
								<label htmlFor="topicThree"></label>
								<input
									id="topicThree"
									name="thirdtopic"
									list="topics"
									placeholder="Also..."
									className={topicInputStyle}
									{...register('thirdtopic', {
										required: 'Topic is required',
									})}
								/>
								<label htmlFor="ratingTopicThree"></label>
								<input
									type="number"
									id="ratingTopicThree"
									name="thirdrating"
									min="1"
									max="5"
									className={topicRatingStyle}
									{...register('thirdrating', {
										required: 'Rating is required',
									})}
								></input>
							</div>
							<div>
								{errors.thirdtopic && (
									<p className="text-red-400 text-sm">
										{errors.thirdtopic.message}
									</p>
								)}
								{errors.thirdrating && (
									<p className="text-red-400 text-sm">
										{errors.thirdrating.message}
									</p>
								)}
							</div>
						</div>
						{/* Topic four */}

						<div className="flex flex-col">
							<div>
								<label htmlFor="topicFour"></label>
								<input
									id="topicFour"
									name="fourthtopic"
									list="topics"
									placeholder="Wait, I nearly forgot..."
									className={topicInputStyle}
									{...register('fourthtopic', {
										required: 'Topic is required',
									})}
								/>
								<label htmlFor="ratingTopicFour"></label>
								<input
									type="number"
									id="ratingTopicFour"
									name="fourthrating"
									min="1"
									max="5"
									className={topicRatingStyle}
									{...register('fourthrating', {
										required: 'Rating is required',
									})}
								></input>
							</div>
							<div>
								{errors.fourthtopic && (
									<p className="text-red-400 text-sm">
										{errors.fourthtopic.message}
									</p>
								)}
								{errors.fourthrating && (
									<p className="text-red-400 text-sm">
										{errors.fourthrating.message}
									</p>
								)}
							</div>
						</div>
					</div>
				</div>
				<datalist id="topics">
					<option value="JS"></option>
				</datalist>
				{/* Confidence input */}
				<div className="flex flex-col border-2 p-2 mb-2">
					<label htmlFor="confidence-range" className="m-2">
						How confident do you feel about what you've learned since your last
						reflection?
					</label>
					<div className="w-1/4">
						<input
							className=" range range-neutral m-2"
							id="confidence-range"
							type="range"
							min="1"
							max="5"
							step="1"
							defaultValue="3"
							name="confidence"
							{...register('confidence', {
								required: true,
							})}
						/>
						<div className="flex text-sm text-gray-600 m-2 pl-3 ">
							<span className="w-8 text-left">1</span>
							<span className="w-8 text-justify">2</span>
							<span className="w-8 text-justify">3</span>
							<span className="w-8 text-justify">4</span>
							<span className="w-8 text-right">5</span>
						</div>
					</div>
				</div>
				{/* Improvements input */}
				<div className="flex flex-col border-2 p-2 mb-2">
					<label htmlFor="improvements" className="m-2">
						What could have gone better / What areas would you like to improve?
					</label>
					<textarea
						className="textarea h-24 textarea-bordered textarea-primary m-2"
						id="improvements"
						name="improvements"
						placeholder="Enter your thoughts here..."
						rows="6"
						cols="50"
						{...register('improvements', {
							required: 'Improvements are required',
						})}
					></textarea>
					{errors.improvements && (
						<p className="text-red-400 text-sm">{errors.improvements.message}</p>
					)}
				</div>
				{/* Other thoughs */}
				<div className="flex flex-col border-2 p-2 ">
					<label htmlFor="add-thoughts" className="m-2">
						Any other thoughts?:
					</label>
					<textarea
						className="textarea h-24 textarea-bordered textarea-primary m-2"
						id="add-thoughts"
						name="reflection"
						placeholder="I've run out of peanut butter..."
						rows="6"
						cols="50"
						{...register('reflection', {
							required: 'Reflection is required',
						})}
					/>
					{errors.reflection && (
						<p className="text-red-400 text-sm">{errors.reflection.message}</p>
					)}
				</div>
				<button className="btn btn-sm btn-glass float-right m-4">Post</button>
			</form>
		</Layout>
	);
}
