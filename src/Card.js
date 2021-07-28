import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
    card: {
        padding: "1rem",
        backgroundColor: "white",
        margin: "0.5rem 0.5rem"
    }
});
const Card = (props) =>{
    const classes = useStyles();
    return(
        <div className={classes.card}>{props.children}</div>

)};

export default Card;