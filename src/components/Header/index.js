import { useUser } from '../App/App.js';
import { useState, useEffect } from 'react';
import css from './index.module.css';

export default function Header() {
	const [quote, setQuote] = useState('');
	const [numberOfReflections, setNumberOfReflections] = useState(null);
	const user = useUser();
	const current = new Date();

	let options = { weekday: 'long' };
	let weekDay = new Intl.DateTimeFormat('en-US', options).format(current);
	const date = `${weekDay} ${current.getDate()}/${
		current.getMonth() + 1
	}/${current.getFullYear()}`;
	const url = `https://global-scope.herokuapp.com/reflections/${
		user.role === 'admin' ? '' : user.bootcamperid
	}`;
	useEffect(() => {
		fetch('https://global-scope.herokuapp.com/quote')
			.then((res) => res.json())
			.then((data) => setQuote(data.payload))
			.catch((err) => console.log(err));
		fetch(url)
			.then((res) => res.json())
			.then((data) => setNumberOfReflections(data.payload.length))
			.catch((err) => console.log(err));
	}, [url]);
	return (
		<header className=" flex justify-between items-center shadow-md p-3">
			<div className="w-1/3 pl-3">
				{user.firstname ? (
					<h1 className="font-extrabold">Welcome {`${user.firstname}`}!</h1>
				) : (
					<h1 className="font-extrabold">Welcome Bootcamper!</h1>
				)}
				<p className="text-xs">It's {date}</p>
			</div>
			<div className="flex  justify-center items-center w-1/3">
				<p className="pr-2">Reflections completed</p>
				<span className={css.test}>{numberOfReflections}</span>
			</div>
			<div className="w-1/3">
				<p className={`${css.quote} text-right text-sm text-purple-900 italic `}>
					{/* "Only compare yourself if you know you’re better than the other person" */}
					{quote}
				</p>
			</div>
		</header>
	);
}
