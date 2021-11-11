import Layout from '../Layout';
import { useUser } from '../App/App.js';
import { useState, useEffect, useRef } from 'react';
import css from './index.module.css';
import { getToday } from '../../libs/helperFunctions';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import lottie from 'lottie-web';
import shortQuotes from '../shortQuotes';

export default function BlogRecapPage() {
	const container = useRef(null);
	const user = useUser();
	const today = getToday();
	const [reflections, setReflections] = useState(null);
	const [reflectionDate, setReflectionDate] = useState(today);
	const [bootcampDate, setBootcampDate] = useState(null);
	const [highlightedDays, setHighlightedDays] = useState([]);

	function handleDateChange(e) {
		let date = e.toISOString().slice(0, 10);
		setReflectionDate(date);
	}

	useEffect(() => {
		fetch(`https://global-scope.herokuapp.com/reflections/${user.bootcamperid}`)
			.then((res) => res.json())
			.then((data) => {
				const dates = data.payload.map((reflection) => {
					return new Date(reflection.created);
				});
				setHighlightedDays(dates);
			})
			.catch((err) => console.log(err));
	}, [user.bootcamperid]);

	const modifiers = {
		highlightedDays: highlightedDays,
	};
	const modifiersStyles = {
		highlightedDays: {
			color: 'white',
			backgroundColor: '#8B5CF6',
		},
	};

	//function to find which week/day of the bootcamp, the reflection was taken
	const findDate = () => {
		const date1 = new Date(user.startdate);
		const date2 = new Date(reflectionDate);
		const diffTime = Math.abs(date2 - date1);
		const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
		console.log(
			'date 1',
			date1,
			'date 2',
			date2,
			'difftime',
			diffTime,
			'diffDays',
			diffDays,
			Math.ceil(diffDays / 7),
			diffDays / 7
		);
		const dateOfBootcamp = `Week ${Math.floor(diffDays / 7) + 1} day ${(diffTime % 7) + 1}`;
		setBootcampDate(dateOfBootcamp);
	};
	const getReflection = (date, id, e) => {
		e.preventDefault();
		fetch(`https://global-scope.herokuapp.com/reflections?date=${date}&id=${id}`)
			.then((res) => res.json())
			.then((response) => {
				if (!response.payload) return;
				setReflections([...response.payload]);
			});
	};

	useEffect(() => {
		const anim = lottie.loadAnimation({
			container: container.current,
			path: '/images/33645-happy-dog.json',
			// autoplay: true,
			renderer: 'svg',
			// loop: true,
		});
		anim.setSpeed(3);
		// anim.destroy()
	}, []);

	let quote = shortQuotes[Math.floor(Math.random() * shortQuotes.length)];

	return (
		<Layout>
			<div
				className="flex flex-col bg-contain mb-3 w-full h-full bg-no-repeat bg-top pr-4 pl-4 pt-3 "
				style={{ backgroundImage: 'url(/images/recapBlogImage.png)' }}
			>
				<form className=" items-center  px-4  flex flex-col  pb-3  opacity-95  w-full  rounded-3xl ">
					<div
						className={`${'bg-white px-6 py-4 my-6 rounded-2xl border-4 border-green-200 shadow-inner h-full m-2'} ${
							css.capital
						}`}
					>
						<label className="mr-3" htmlFor="start">
							What day do you want to review?{' '}
						</label>
						<DayPickerInput
							value={today}
							initialMonth={new Date()}
							dayPickerProps={{
								// selectedDays: highlightedDays,
								onDayClick: handleDateChange,
								modifiers: modifiers,
								modifiersStyles: modifiersStyles,
								showOutsideDays: true,
							}}
						/>
						<button
							className="btn btn-sm btn-accent shadow-xl bg-green-400 mb-5 ml-5 "
							onClick={(e) => {
								findDate();
								getReflection(reflectionDate, user.bootcamperid, e);
							}}
						>
							Look up
						</button>
						{reflections ? (
							<div>
								<label htmlFor="topics-section">
									Topics you have covered on {bootcampDate}, and your confidence
									rating out of 5:
								</label>
								<ul className="flex textarea h-20 textarea-bordered textarea-accent justify-around font-bold mt-2 mb-4 ">
									{reflections[0].topics.map((topic, i) => {
										return (
											<li key={i}>
												{topic.topic} -{' '}
												<span className="text-lg">{topic.rating}</span>
											</li>
										);
									})}
								</ul>
								<label htmlFor="confidence-range">
									How confident did you feel about what you've learned since your
									last reflection?
								</label>
								<p className=" textarea h-5 font-bold textarea-accent mt-2 mb-4  ">
									{reflections[0].confidence}/5
								</p>
								<label htmlFor="improvements">What you needed to work on...</label>
								<p className="improvement textarea textarea-bordered textarea-accent font-bold mt-2 mb-4  ">
									{reflections[0].improvements}
								</p>
								<label htmlFor="add-thoughts">Other thoughts...</label>
								<p className="reflection textarea textarea-bordered textarea-accent font-bold mt-2 mb-4  ">
									{reflections[0].reflection}
								</p>
								<label htmlFor="feeling-score">How you were feeling:</label>
								<p className="reflection textarea textarea-bordered textarea-accent font-bold mt-2 mb-4  ">
									<img
										src={`/images/emojis/${reflections[0].overallfeeling}.png`}
										alt="emoji face"
									/>
								</p>
								<label htmlFor="feeling-score">What you were grateful for:</label>
								<p className="reflection textarea textarea-bordered textarea-accent font-bold mt-2 mb-4  ">
									{reflections[0].grateful}
								</p>
							</div>
						) : (
							''
						)}
					</div>
				</form>
			</div>
			<div className="w-1/12   fixed -bottom-8 -right-8  " ref={container}>
				<div className={css.dog}>
					<p className={css.text}>{quote}</p>
				</div>
			</div>
		</Layout>
	);
}
