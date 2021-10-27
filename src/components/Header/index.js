import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useUser } from "../App/App.js";

export default function Header() {
  const user = useUser();
  const current = new Date();
  let options = { weekday: "long" };
  let weekDay = new Intl.DateTimeFormat("en-US", options).format(current);
  const date = `${weekDay} ${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  return (
    <header className=" flex justify-between items-center h-15 shadow-md pr-5">
      <div className="w-1/2 pl-5 relative">
        <FontAwesomeIcon size="lg" icon={faStar} style={{ fontSize: "51px" }} />
        <span className="text-white absolute left-10 top-4 pl-1">6</span>
      </div>
	  {user.firstname ? <h1>Welcome {`${user.firstname}'s`}!</h1> : <h1>Welcome Bootcamper!</h1>}
      <div>
        <p className="text-right text-purple-900 italic">
          "Only compare yourself if you know you’re better than the other
          person"
        </p>
        <p className="text-right text-purple-900"> {date}</p>
      </div>
    </header>
  );
}
