import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../axiosConfig/instance";

export const getMovies = createAsyncThunk("movies/getAll", async (page=1,thunkApi) => {
try {
  const res = await axiosInstance.get("/movie/popular", {
    params: {
      page,
    },
  });
  return res.data.results;
} catch (error) {
  thunkApi.rejectWithValue(error)
}
 
});


const moviesSlice = createSlice({
  name: "movies",
  initialState: { movies: [] , isLoading: false , error: null},
  extraReducers: (builder) => {
    builder.addCase(getMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
      state.isLoading = false;
      state.error = null;
    });

    builder.addCase(getMovies.pending, (state)=>{
        state.isLoading = true
        state.error = null;
    })

    builder.addCase(getMovies.rejected, (state,action)=>{
        state.error = action.payload
    })
  },
});

export default moviesSlice.reducer;
