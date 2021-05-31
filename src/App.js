import { useState } from "react";

//import logo from './logo.svg';
import classes from "./App.module.css";
import Today from "./components/Today/Today";
import AddItem from "./components/AddItem/AddItem";
import Toolbar from "./components/UI/Toolbar/Toolbar";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { getToday } from "./shared/date";
import { DUMMY_DAYS } from "./shared/DummyDays";

const App = () => {
  //const [date, setDate] = useState(new Date().getTime());

  const date = new Date().getTime();

  // Structure
  // {id, day (ts at midnight), ts start, ts end, category, description}
  const [days, setDays] = useState(DUMMY_DAYS);

  const addHandler = (item) => {
    setDays((prevState) => {
      return [
        ...prevState,
        item,
      ];
    });
  };

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
            <Today days={days} date={date} />
          </Route>
          <Route exact path="/add" render={(props) => <AddItem {...props} add={addHandler} />} />
          <Route path="/add/:day" render={(props) => <AddItem {...props} add={addHandler} />} />
          <Route
            path="/day/:day"
            render={(props) => (
              <Today {...props} days={days} date={date} />
            )}
          ></Route>
        </main>
      </Router>
    </div>
  );
};

export default App;
