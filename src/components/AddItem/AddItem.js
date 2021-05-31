import { useState } from 'react';
import classes from './AddItem.module.css';
import { dayKey, dayKeyFromRoute, dayKeyFromHHMM } from '../../shared/date.js';

const categories = [
    'work',
    'entertainment'
];

const AddItem = (props) => {
    const [timeStart, setTimeStart] = useState("");
    const [timeEnd, setTimeEnd] = useState("");
    const [category, setCategory] = useState(categories[0]);
    const [description, setDescription] = useState("");

    const timeStartHandler = (event) => {
        setTimeStart(event.target.value);
    }
    
    const timeEndHandler = (event) => {
        setTimeEnd(event.target.value);
    }
    
    const categoryHandler = (event) => {
        setCategory(event.target.value);
    }
    
    const descriptionHandler = (event) => {
        setDescription(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
    
        console.log(timeStart);

        const item = {
            id: new Date().getTime(),
            day: dayKey(),
            start: dayKeyFromHHMM(timeStart),
            end: dayKeyFromHHMM(timeEnd),
            category: category,
            description: description
        }

        console.log(item);
        props.add(item);
    }

    // TODO fix / simplify these
    const dayTS = props.match && Object.keys(props.match.params).length !== 0? dayKeyFromRoute(props.match.params.day) : dayKey();
    const dateHeader = props.match && Object.keys(props.match.params).length !== 0? 'on ' + new Date(dayTS).toLocaleDateString() : 'today';

    const cats = categories.map(cat => {
        return <option value={cat} key={cat}>{cat}</option>;
    });

    return (
        <form className={classes.AddForm} onSubmit={submitHandler}>
            <p>What did I do {dateHeader}?</p>
            
            <label htmlFor="start">Start</label>
            <input type="time" name="start" placeholder="Start time" onChange={timeStartHandler}></input>

            <label htmlFor="end">End</label>
            <input type="time" name="end" placeholder="End time" onChange={timeEndHandler}></input>

            <label htmlFor="category">Category</label>
            <select name="category" onChange={categoryHandler} value={category}>
                {cats}
            </select>
            <label htmlFor="description">Description</label>
            <textarea name="description" onChange={descriptionHandler} placeholder="At (time), I..." />
            <p><button type="submit">Add to items</button></p>
        </form>
    );
}

export default AddItem;