import classes from "./Today.module.css";
import {dayKeyFromRoute, dayKey} from '../../shared/date.js';

// expected: /day/YYYY-MM-DD

const Today = (props) => {
  const day = props.match
    ? new Date(dayKeyFromRoute(props.match.params.day)).toLocaleDateString()
    : new Date().toLocaleDateString();
  
  const dayTS = props.match? dayKeyFromRoute(props.match.params.day) : dayKey();

  let itemsDisplay = <p>No items to display for this date.</p>;

  const items = props.days.filter(day => {
    return day.day === dayTS;
  });

  if (items) {
    const itemsFormatted = items.map((item) => {
      const timeStart = new Date(item.start).toLocaleTimeString();
      const timeEnd = new Date(item.end).toLocaleTimeString();

      //const durMin = Math.floor(item.duration / 60000);

      return (
        <li key={item.id}>
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
    <div className={classes.Today}>
      <p>Here is how I spent my day on {day}:</p>
      {itemsDisplay}
    </div>
  );
};

export default Today;
