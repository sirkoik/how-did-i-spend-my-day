import classes from './AddItem.module.css';

const categories = [
    'work',
    'entertainment'
];

const addToItems = () => {
    return;
}

const AddItem = (props) => {
    const cats = categories.map((cat, i) => {
        return <option value={i} key={i}>{cat}</option>;
    });

    return (
        <form className={classes.AddForm}>
            <p>What did I do today?</p>
            
            <label for="start">Start</label>
            <input name="start" placeholder="Start time"></input>

            <label for="end">End</label>
            <input name="end" placeholder="End time"></input>

            <label for="category">Category</label>
            <select name="category">
                {cats}
            </select>
            <label for="description">Description</label><textarea name="description" value="" placeholder="On (time), I..." />
            <p><button onclick={addToItems()}>Add to items</button></p>
        </form>
    );
}

export default AddItem;