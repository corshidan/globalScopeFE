import { useUser } from '../App/App.js';
import { useState, useEffect } from 'react';
import css from './index.module.css';

export default function Header() {
	const [quote, setQuote] = useState('');
	const user = useUser();
	const current = new Date();
	let options = { weekday: 'long' };
	let weekDay = new Intl.DateTimeFormat('en-US', options).format(current);
	const date = `${weekDay} ${current.getDate()}/${
		current.getMonth() + 1
	}/${current.getFullYear()}`;
	useEffect(() => {
		fetch('https://global-scope.herokuapp.com/quote')
			.then((res) => res.json())
			.then((data) => setQuote(data.payload))
			.catch((err) => console.log(err));
	}, []);
	return (
		<header className=" flex justify-between items-center shadow-md p-3">
			<div>
				{user.firstname ? (
					<h1 className="font-extrabold">Welcome {`${user.firstname}`}!</h1>
				) : (
					<h1 className="font-extrabold">Welcome Bootcamper!</h1>
				)}
				<p className="text-xs">It's {date}</p>
			</div>
			<div className={css.streak}>
				<p>Number of reflections completed:</p>
				<span className={css.test}>6</span>
			</div>
			<div>
				<p className={`${css.quote} text-right text-sm text-purple-900 italic `}>
					{/* "Only compare yourself if you know you’re better than the other person" */}
					{quote}
				</p>
			</div>
		</header>
	);
}
