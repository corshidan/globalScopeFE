import React, { useState, useEffect } from 'react';
import ReactWordcloud from 'react-wordcloud';
import { useUser } from '../App/App.js';

const options = {
	rotations: 90,
	rotationAngles: [-40, -25, 0, 45, 25, 75],
	fontSizes: [20, 50],
};
const size = [800, 650];
const splitWords = (string) => {
	return string
		.split(' ')
		.filter((word) => word.length > 3)
		.map((word) => word.toLowerCase().replace(/\W/, ''));
};
const extractWords = (array) => {
	const words = [];
	const wordsObj = {};
	array.forEach((reflection) => {
		words.push(
			...splitWords(reflection.grateful),
			...splitWords(reflection.reflection),
			...splitWords(reflection.improvements)
		);
	});
	words.forEach((word) => {
		wordsObj[word] ? (wordsObj[word] += 1) : (wordsObj[word] = 1);
	});
	console.log(wordsObj);
	return Object.keys(wordsObj).map((item) => {
		return { text: item, value: wordsObj[item] };
	});
};

export default function Wordcloud() {
	const user = useUser();
	const [words, setWords] = useState(null);
	const url = `https://global-scope.herokuapp.com/reflections/${user.bootcamperid}`;
	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => setWords(extractWords(data.payload)))
			.catch((err) => console.error(err));
	}, [url]);
	return (
		<div>
			{words && (
				<ReactWordcloud
					options={options}
					size={size}
					words={words}
					className="flex justify-center"
				/>
			)}
		</div>
	);
}
