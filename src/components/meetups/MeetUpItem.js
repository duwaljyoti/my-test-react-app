import classes from './MeetUpItem.module.css'
import Card from "../ui/Card";

function MeetUpItem(props) {
    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.meetUp.image} alt={props.meetUp.title}
                    />
                </div>
                <div className={classes.content}>
                    <h3>{props.meetUp.title}</h3>
                    <address>{props.meetUp.address}</address>
                    <p>{props.meetUp.description}</p>
                </div>
                <div className={classes.actions}>
                    <button>To Favourites</button>
                </div>
            </Card>
        </li>
    )
}

export default MeetUpItem;
