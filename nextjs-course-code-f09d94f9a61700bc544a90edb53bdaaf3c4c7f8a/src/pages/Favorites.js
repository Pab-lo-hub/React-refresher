import { useContext } from 'react';

import FavoritesConectext from '../store/favorites-context';

function Favorites() {
    const favoritesCtx = useContext(FavoritesContext)
    return <section>
        <h1>My Favorites</h1>
    </section>
}  

export default Favorites;