import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
	const current = new Date();
	const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

	return (
		<>
			<header className="header h-20 bg-purple-600 pr-5">
				<br />
				<FontAwesomeIcon className="w-6" size="xs" icon={faStar} />
				<p className="quote text-right text-white italic">
					"Only compare yourself if you know you’re better than the other person"
				</p>
				<p className="date text-right text-white"> {date}</p>
			</header>
		</>
	);
}
