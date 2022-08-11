import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favorite: [],
    totalfavorites: 0,
});

function FavoritesContextProvider(props) {
    const [ userFavorites, setUserFavorites ] = useState([]);

    function addFavoriteHandler(favoriteMeetup) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteMeetup);
        })
    }

    function removeFavoriteHandler(mmetupId) {
        setUserFavorites(prevUserFavorites => {
            return prevUsersFavorites.filter(meetup => meetup.id !== meetupid);
        });
    }
    
    const context = {
        favorites: userFavorites
    };

    return <FavoritesContext.provider value={context}>
        {props.children} 
    </FavoritesContext.provider>
}