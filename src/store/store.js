import { configureStore } from "@reduxjs/toolkit";
import HandleFavouritesReducer from "./slices/handleFavourites";
import MoviesReducer from "./slices/movies";

const store = configureStore({
    reducer:{
        favourites:HandleFavouritesReducer,
        movies:MoviesReducer,
    }
})

export default store;