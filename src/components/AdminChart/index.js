import React from 'react';
import { Line } from 'react-chartjs-2';

const options = {
	scales: {
		y: {
			beginAtZero: true,
			max: 7,
			min: 0,
		},
	},
	maintainAspectRatio: false,
	animations: {
		y: {
			easing: 'easeInOutElastic',
			duration: 2000,
			from: (ctx) => {
				if (ctx.type === 'data') {
					if (ctx.mode === 'default' && !ctx.dropped) {
						ctx.dropped = true;
						return 0;
					}
				}
			},
		},
	},
};
export default function AdminChart({ graphData }) {
	const confidenceData = graphData.map((item) => item.confidence);
	const feelingData = graphData.map((item) => item.overallfeeling);
	// const labels = new Array(graphData.length);
	const labels = graphData.map((item, i, arr) => {
		if (i === 0) {
			return 'Start';
		}
		if (i === arr.length - 1) {
			return 'Today';
		}
		return '';
	});
	const data = {
		labels: labels,
		datasets: [
			{
				label: 'Confidence',
				data: confidenceData,
				fill: false,
				backgroundColor: 'rgb(255, 99, 132)',
				borderColor: 'rgba(255, 99, 132, 0.5)',
				tension: 0.3,
			},
			{
				label: 'Overall Feeling',
				data: feelingData,
				fill: false,
				backgroundColor: 'rgb(23, 99, 132)',
				borderColor: 'rgba(25, 199, 222, 0.7)',
				tension: 0.3,
			},
		],
	};
	return (
		<>
			<Line data={data} options={options} width={500} height={500} />
		</>
	);
}
