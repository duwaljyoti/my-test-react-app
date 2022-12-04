import {useContext} from "react";
import FavouritesContext from "../store/FavouritesContext";
import MeetUpList from "../components/meetups/MeetUpList";

function  FavouritesPage() {
    const favouriteContext = useContext(FavouritesContext);
    const events = favouriteContext.userFavourites;
    return <div>
        <h1>Favourites</h1>
        <MeetUpList meetUps={events}/>
    </div>
}

export default FavouritesPage;
