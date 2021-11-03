import React, { useState, useEffect } from 'react';
import ReactWordcloud from 'react-wordcloud';
import { useUser } from '../App/App.js';

const options = {
	rotations: 40,
	rotationAngles: [-40, -25, 0, 45, 25, 75],
	fontSizes: [20, 80],
};
// const size = [800, 550];
const excluded = ["the", "and"]
const splitWords = (string) => {
	return string
	.split(' ')
	.filter((word) => word.length > 2 && !excluded.includes(word))
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
	// console.log(window.innerHeight, window.innerWidth);
	return (
		<div className="flex justify-center h-full">
			{words && (
				<ReactWordcloud
					options={options}
					// size={size}
					words={words}
					className="flex justify-center items-center"
					style={{ height: '70%', width: '70%' }}
				/>
			)}
		</div>
	);
}
