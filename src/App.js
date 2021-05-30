import { useState } from "react";

//import logo from './logo.svg';
import classes from "./App.module.css";
import Today from "./components/Today/Today";
import AddItem from "./components/AddItem/AddItem";
import Toolbar from "./components/UI/Toolbar/Toolbar";
import { BrowserRouter as Router, Route } from "react-router-dom";

const getToday = () => {
  return new Date().toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "2-digit",
    year: "numeric",
    // hour: "2-digit",
    // minute: "2-digit",
    // second: "2-digit",
  });
};

const setDays = () => {};

const App = () => {
  // Structure
  // [timestamp at midnight]: {start, end, category, description}
  //
  // The key is the timestamp at midnight, or beginning of the day. This makes searching through
  // the days object for a specific day fast and easy.
  const [days, setDays] = useState({
    [new Date("2022-May-1").getTime()]: [
      {
        start: new Date("2022-May-1 15:00:00").getTime(),
        end: new Date("2022-May-1 15:00:00").getTime() + 1000000,
        category: "work",
        description: "I worked on an app.",
      },
      {
        date: new Date().getTime(),
        start: new Date("2022-May-1 20:00:00").getTime(),
        end: new Date("2022-May-1 20:00:00").getTime() + 50000,
        category: "entertainment",
        description: "I watched a TV show.",
      },
    ],
    [new Date().getTime() - (new Date().getTime() % 86400000)]: [
      {
        start: new Date("2022-May-5 08:00:00").getTime(),
        end: new Date("2022-May-5 08:00:00").getTime() + 1200000,
        category: "work",
        description: "I worked on a project.",
      },
    ],
  });

  return (
    <div className={classes.App}>
      <Router>
        <header className={classes.AppHeader}>
          <Toolbar></Toolbar>
          <h1 className={classes.Title}>How did I spend my day</h1>
          <h2 className={classes.Subtitle}>Today is {getToday()}</h2>
        </header>
        <main className={classes.Main}>
          <Route exact path="/">
            <Today days={days} />
          </Route>
          <Route path="/add" component={AddItem} />
          <Route
            path="/day/:day"
            render={(props) => <Today {...props} days={days} />}
          ></Route>
        </main>
      </Router>
    </div>
  );
};

export default App;
