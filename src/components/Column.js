import classes from './Column.module.css'

const Column = (props) => {
    return <div className={`${classes.column} ${props.className}`}>{props.children}</div>
};

export default Column