import {createContext, useState} from "react";
export const FavouritesContext = createContext({});

const FavouritesProvider = ({children}) => {
    const [userFavourites, setUserFavourites] = useState([]);

    const addUserFavourites = (favouriteMeetUp) => setUserFavourites((prevUserFavourites) => {
        return prevUserFavourites.concat(favouriteMeetUp)
    })

    const isMeetUpFavourite = (meetUp) => userFavourites.map(singleMeetUp => singleMeetUp.id).some(id => meetUp.id === id);

    const removeFromFavourites = (favouriteMeetUp) => setUserFavourites((prevUserFavourites) => {
        return prevUserFavourites.filter(singleMeetUp => singleMeetUp.id !== favouriteMeetUp.id)
    })
    const totalUserFavourites = () => userFavourites.length;

    // It is preferable to do the above rather than the below as
    // the below method does not always guarantee for us to give the latest values.
    // const addUserFavourites = (favouriteMeetUp) =>
    //     setUserFavourites((prevUserFavourites) => prevUserFavourites.concat(favouriteMeetUp))

    return (
        <FavouritesContext.Provider
            value={{
                userFavourites,
                addUserFavourites,
                isMeetUpFavourite,
                removeFromFavourites,
                totalUserFavourites
        }}>
            {children}
        </FavouritesContext.Provider>
    );
}

export { FavouritesProvider}
