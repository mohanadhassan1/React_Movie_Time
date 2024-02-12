import { createSlice } from "@reduxjs/toolkit";


const favSlice = createSlice({
    name: 'favourites',
    initialState: {favourites:[]},
    reducers: {
        addToFav:(state,action)=>{
            state.favourites.push(action.payload);
        },
        removeFromFav:(state,action)=>{
            state.favourites = state.favourites.filter(movie => movie.id != action.payload)
        }
    }
})


export const {addToFav,removeFromFav} = favSlice.actions

export default favSlice.reducer