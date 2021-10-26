import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
	const current = new Date();
	const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

	return (
		<header className=" flex justify-between items-center h-20 bg-purple-600 pr-5">
			<div className="w-1/2 pl-5 relative">
				<FontAwesomeIcon size="2xl" icon={faStar} style={{ fontSize: '51px' }} />
				<span className="text-white absolute left-10 top-4 pl-1">6</span>
			</div>
			<div>
				<p className="text-right text-white italic">
					"Only compare yourself if you know you’re better than the other person"
				</p>
				<p className="text-right text-white"> {date}</p>
			</div>
		</header>
	);
}
