import Layout from '../Layout';

export default function BlogInputPage() {
	return (
		<Layout>
			<form className="border-2">
				<div className="flex flex-col border-4">
					<label for="topics-section">
						What topics have you covered since you were last here? Rate your confidence
						for each from 1-5:
					</label>
					<div className="flex">
						<label for="topicOne"></label>
						<input
							id="topicOne"
							name="topicOne"
							list="topics"
							placeholder="The first topic was..."
						/>
						<label for="ratingTopicOne"></label>
						<input
							type="number"
							id="ratingTopicOne"
							name="ratingTopicOne"
							min="1"
							max="5"
						></input>
					</div>
					<datalist id="topics">
						<option value="JS"></option>
					</datalist>
					<div className="flex">
						<label for="topicTwo"></label>
						<input id="topicTwo" name="topicTwo" list="topics" placeholder="And..." />
						<label for="ratingTopicTwo"></label>
						<input
							type="number"
							id="ratingTopicTwo"
							name="ratingTopicTwo"
							min="1"
							max="5"
						></input>
					</div>

					<div className="flex">
						<label for="topicThree"></label>
						<input
							id="topicThree"
							name="topicThree"
							list="topics"
							placeholder="Also..."
						/>
						<label for="ratingTopicThree"></label>
						<input
							type="number"
							id="ratingTopicThree"
							name="ratingTopicThree"
							min="1"
							max="5"
						></input>
					</div>

					<div className="flex">
						<label for="topicFour"></label>
						<input
							id="topicFour"
							name="topicFour"
							list="topics"
							placeholder="Wait, I nearly forgot..."
						/>
						<label for="ratingTopicFour"></label>
						<input
							type="number"
							id="ratingTopicFour"
							name="ratingTopicFour"
							min="1"
							max="5"
						></input>
					</div>
				</div>

				<div className="flex flex-col border-4">
					<label for="confidence-range">
						How confident do you feel about what you've learned since your last
						reflection?
					</label>
					<p>1 2 3 4 5</p>
					<input id="confidence-range" type="range" min="0" max="5" step="1" />
				</div>

				<div className="flex flex-col border-4">
					<label for="improvements">
						What could have gone better / What areas would you like to improve?
					</label>
					<textarea
						className="border-2"
						id="improvements"
						name="improvements"
						placeholder="Enter your thoughts here..."
						rows="6"
						cols="50"
					></textarea>
				</div>

				<div className="flex flex-col border-4">
					<label for="add-thoughts">Any other thoughts?:</label>
					<textarea
						className="border-2"
						id="add-thoughts"
						name="add-thoughts"
						placeholder="I've run out of peanut butter..."
						rows="6"
						cols="50"
					/>
				</div>
			</form>
		</Layout>
	);
}
