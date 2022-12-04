import classes from './MeetUpItem.module.css'
import Card from "../ui/Card";
import {useContext} from "react";
import FavouritesContext from "../../store/FavouritesContext";

function MeetUpItem(props) {
    const favouriteContext = useContext(FavouritesContext);

    const addFavourites = () => {
        const currentMeetUp = props.meetUp;
        if (favouriteContext.isMeetUpFavourite(currentMeetUp)) {
            favouriteContext.removeFromFavourites(currentMeetUp);
        } else {
            favouriteContext.addUserFavourites(currentMeetUp)
        }
    }

    const isFavourite = () => favouriteContext.isMeetUpFavourite(props.meetUp)

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
                    {isFavourite() ? <button onClick={addFavourites}>Undo Favourite</button> :
                        <button onClick={addFavourites}>Favourites</button>}
                </div>
            </Card>
        </li>
    )
}

export default MeetUpItem;
