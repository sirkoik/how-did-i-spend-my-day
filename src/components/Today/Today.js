import { Fragment } from "react";
import classes from "./Today.module.css";

// expected: /day/YYYY-MM-DD

const formatDay = (routeDay) => {
  return new Date(routeDay + " 00:00:00").getTime();
};

const Today = (props) => {
  const day = props.match
    ? new Date(formatDay(props.match.params.day)).toLocaleDateString()
    : new Date().toLocaleDateString();
  
  const dayTS = props.match? formatDay(props.match.params.day) : new Date().getTime() - new Date().getTime() % (86400 * 1000);

  let itemsDisplay = <p>No items to display for this date.</p>;

  const items = props.days[dayTS];

  if (items) {
    const itemsFormatted = items.map((item, i) => {
      const timeStart = new Date(item.start).toLocaleTimeString();
      const timeEnd = new Date(item.end).toLocaleTimeString();

      const durMin = Math.floor(item.duration / 60000);

      return (
        <li key={Math.random()}>
          <ul className={classes.item}>
            <li>
              {timeStart} - {timeEnd}
            </li>
            <li>{item.category}</li>
            <li>{item.description}</li>
          </ul>
        </li>
      );
    });

    itemsDisplay = <ol>{itemsFormatted}</ol>;
  }

  return (
    <div class={classes.Today}>
      <p>Here is how I spent my day on {day}:</p>
      {itemsDisplay}
    </div>
  );
};

export default Today;
