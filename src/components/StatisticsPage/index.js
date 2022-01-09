import React, { useEffect, useState } from 'react';
import Layout from '../Layout';
// import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
// import { ChakraProvider } from "@chakra-ui/react";
import { PolarArea, Line } from 'react-chartjs-2';
import { useUser } from '../App/App.js';
import GaugeChart from 'react-gauge-chart';

export default function StatisticsPage() {
	// gauges
	const [confidence, setConfidence] = useState(1);
	const [feelings, setFeelings] = useState(1);
	// mood tracker
	const [refDate, setRefDate] = useState(1);
	//  emoji
	const [emojiTally, setEmojiTally] = useState(0);

	const user = useUser();
	useEffect(() => {
		fetch(`https://global-scope.herokuapp.com/reflections/${user.bootcamperid}`)
			.then((res) => res.json())
			.then((data) => {
				const overallConfidence = data.payload.map((reflection) => reflection.confidence);
				const feeling = data.payload.map((reflections) => reflections.overallfeeling);
				const reducer = overallConfidence.reduce((a, c) => a + c);
				const averageConfidence = reducer / overallConfidence.length;
				setConfidence(averageConfidence);

				// last 5 confidence ratings line chart
				const recentFeelings = data.payload
					.map((reflections) => reflections.overallfeeling)
					.reverse();
				setRefDate(recentFeelings);

				// avreage emoji gauge
				const emojiLastFive = recentFeelings.slice(0, 5);
				const averageEmoji = Math.round(
					emojiLastFive.reduce((a, c) => a + c) / emojiLastFive.length
				);
				setFeelings(averageEmoji);

				// emoji total

				const createTally = (items) => {
					const tally = {};
					for (let i = 0; i < items.length; i++) {
						if (!tally[items[i]]) {
							tally[items[i]] = 0;
						}
						tally[items[i]]++;
					}
					return tally;
				};
				const tallyRes = createTally(feeling);
				//  console.log(tallyRes[5])

				setEmojiTally(tallyRes);
			})

			.catch((err) => console.log(err));
	}, [user.bootcamperid]);

	const findDate = () => {
		const date1 = new Date(user.startdate);
		const date2 = new Date();
		const diffTime = Math.abs(date2 - date1);
		// console.log(diffTime)
		const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
		// console.log(diffDays)
		const progressBar = Math.floor((diffDays / 112) * 100);
		// console.log(progressBar)

		return progressBar;
	};
	let value = findDate() > 100 ? 100 : findDate();
	let progressPercentage = value / 100;

	return (
		<Layout>
			<div className="py-4 px-2">
				<div className="grid grid-cols-3 px-10 gap-10">
					<div className="flex flex-col  items-center mt-5 pt-6 pb-10 bg-gray-100  w-3/4 h-3/4 rounded-b-xl   mt-4 shadow-inner relative">
						<GaugeChart
							id="gauge-chart2"
							nrOfLevels={6}
							arcWidth={0.3}
							percent={(Math.round(feelings) * 1.67 - 1) / 10}
							colors={['rgba(255, 206, 86, 0.7)', 'rgba(255, 180, 0, 0.9)']}
							style={{ width: '100%' }}
							needleBaseColor={'#401485'}
							needleColor={'rgba(153, 102, 255, 0.5)'}
							hideText={true}
						/>
						<img
							className="h-1/6 "
							src={`/images/emojis/${Math.round(`${feelings}`)}.png`}
							alt="emoji face"
						/>
						<div className=" p-3 mt-20 w-2/3 bg-green-200 border-2  rounded-xl bg-gray-300 absolute  inset-x-center -bottom-8 shadow-2xl shadow-inner opacity-90    ">
							<p className="text-center font-medium">Average Mood</p>
						</div>
					</div>
					<div className="flex flex-col  items-center pt-6 pb-10 bg-gray-100 w-3/4 h-3/4 rounded-b-xl  mx-auto mt-5 shadow-inner relative ">
						<GaugeChart
							id="gauge-chart3"
							nrOfLevels={20}
							colors={['rgba(153, 102, 255, 0.5)', 'rgba(20, 220, 20, 0.7)']}
							arcWidth={0.35}
							percent={progressPercentage}
							textColor={'#464A4F'}
							style={{ width: '100%' }}
							needleBaseColor={'#401485'}
							needleColor={'rgba(153, 102, 255, 0.5)'}
							hideText={true}
						/>
						<p className="text-center font-medium">{value}%</p>
						<div className=" p-3 mt-20 w-2/3 bg-green-200 border-2  rounded-xl absolute  inset-x-center -bottom-8 shadow-2xl shadow-inner opacity-90 ">
							<p className="text-center font-medium">Bootcamp Progress</p>
						</div>
					</div>

					<div className="flex flex-col  items-center mt-5 pt-6 pb-10 bg-gray-100  w-3/4 h-3/4 rounded-b-xl   mt-4 shadow-inner relative justify-self-end">
						<GaugeChart
							id="gauge-chart1"
							percent={(Math.round(confidence) * 2 - 1) / 10}
							nrOfLevels={5}
							arcWidth={0.3}
							style={{ width: '100%' }}
							needleBaseColor={'#401485'}
							needleColor={'rgba(153, 102, 255, 0.5)'}
							hideText={true}
							colors={[
								'rgba(255, 99, 132, 0.8)',
								'rgba(255, 206, 86, 0.8)',
								'rgba(20, 220, 20, 0.7)',
							]}
						/>
						<p className="text-center font-medium">{Math.round(confidence)}</p>
						<div className=" p-3 mt-20 w-2/3 bg-green-200 border-2  rounded-xl bg-gray-300 absolute  inset-x-center -bottom-8 shadow-2xl shadow-inner opacity-90    ">
							<p className="text-center font-medium">Overall Confidence</p>
						</div>
					</div>
				</div>

				<div className="px-10 grid grid-cols-2 gap-10   ">
					<div className=" bg-gray-100 rounded-l-xl  drop-shadow-2xl  shadow-inner">
						<PolarArea
							data={{
								labels: ['😭', '🙁', '😐', '🤔', '😀', '🤩 '],
								datasets: [
									{
										label: 'Mood Breakdown',
										fill: true,
										data: [
											`${emojiTally[1]}`,
											`${emojiTally[2]}`,
											`${emojiTally[3]}`,
											`${emojiTally[4]}`,
											`${emojiTally[5]}`,
											`${emojiTally[6]}`,
										],
										backgroundColor: [
											'rgba(255, 99, 132, 0.5)',
											'rgba(255, 159, 64, 0.5)',
											'rgba(255, 206, 86, 0.5)',
											'rgba(54, 162, 235, 0.5)',
											'rgba(75, 192, 192, 0.5)',
											'rgba(153, 102, 255, 0.5)',
										],

										borderWidth: 3,
									},
									// {
									//   label: 'Quantity',
									//   data: [47, 52, 67, 58, 9, 50],
									//   backgroundColor: 'orange',
									//   borderColor: 'red',
									// },
								],
							}}
							height={400}
							width={600}
							options={{
								maintainAspectRatio: false,

								scales: {
									r: {
										ticks: {
											display: false,
										},
									},
								},
								legend: {
									labels: {
										fontSize: 50,
									},
								},
							}}
						/>
					</div>

					<div className=" bg-gray-100 rounded-r-xl z-10 shadow-inner">
						<Line
							data={{
								labels: ['', '', '', '', 'Newest'],
								datasets: [
									{
										label: 'Recent Mood Tracker',
										data: [
											`${refDate[4]}`,
											`${refDate[3]}`,
											`${refDate[2]}`,
											`${refDate[1]}`,
											`${refDate[0]}`,
										],
										backgroundColor: ['rgba(255, 159, 64, 0.5)'],
										borderColor: ['white'],
										borderWidth: 3,
										fill: true,
									},
									// {
									//   label: 'Quantity',
									//   data: [47, 52, 67, 58, 9, 50],
									//   backgroundColor: 'orange',
									//   borderColor: 'red',
									// },
								],
							}}
							height={400}
							width={600}
							options={{
								maintainAspectRatio: false,
								// scaleOverride : true,
								scales: {
									y: {
										ticks: {
											beginAtZero: true,
											type: 'linear',
											min: 1,
											max: 6,
											stepSize: 1,
											offset: true,
											callback: (value) => {
												if (value === 1) {
													return `😭`;
												}
												if (value === 2) {
													return `🙁`;
												}
												if (value === 3) {
													return `😐`;
												}
												if (value === 4) {
													return `🤔`;
												}
												if (value === 5) {
													return `😀`;
												}
												if (value === 6) {
													return `🤩`;
												}
											},
										},
									},
								},
								legend: {
									labels: {
										font: {
											size: 10,
										},
									},
								},
							}}
						/>
					</div>
				</div>
			</div>
		</Layout>
	);
}
