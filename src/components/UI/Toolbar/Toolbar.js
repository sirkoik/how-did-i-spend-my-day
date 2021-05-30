import {NavLink} from 'react-router-dom';
import classes from './Toolbar.module.css';

const toolbar = () => {
    return (<ul className={classes.Toolbar}>
        <li><NavLink activeClassName={classes.active} to="/" exact>Home</NavLink></li>
        <li><NavLink activeClassName={classes.active} to="/add">Add</NavLink></li>
    </ul>);
}

export default toolbar;