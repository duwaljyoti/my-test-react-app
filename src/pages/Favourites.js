import {useContext} from "react";
import MeetUpList from "../components/meetups/MeetUpList";
import {FavouritesContext} from "../store/FavouritesProvider";

function  FavouritesPage() {
    const favouriteContext = useContext(FavouritesContext);
    const events = favouriteContext.userFavourites;
    return <div>
        <h1>Favourites</h1>
        <MeetUpList meetUps={events}/>
    </div>
}

export default FavouritesPage;
