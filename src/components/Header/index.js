import { useUser } from "../App/App.js";
import css from "./index.module.css";

export default function Header() {
  const user = useUser();
  const current = new Date();
  let options = { weekday: "long" };
  let weekDay = new Intl.DateTimeFormat("en-US", options).format(current);
  const date = `${weekDay} ${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  return (
    <header className=" flex justify-between items-center shadow-md p-3">
      <div>
        {user.firstname ? (
          <h1>
            Welcome {`${user.firstname}`}!
          </h1>
        ) : (
          <h1>Welcome Bootcamper!</h1>
        )}
        <p className="whitespace-nowrap text-xs">It's {date}</p>
      </div>
      <div className={css.streak}>
        <p>
          Number of reflections completed:
          <span>
            <img className="h-10" src="/images/star.png" alt="star"></img>
            <span className="">6</span>
          </span>
        </p>
      </div>
      <div>
        <p className="text-right text-purple-900 italic whitespace-nowrap">
          "Only compare yourself if you know you’re better than the other
          person"
        </p>
      </div>
    </header>
  );
}
