import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        movieData: null,
    },
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        enterMovie: (state, action) => {
            state.movieData = action.payload.movieData;
        },
    },
});

export const { enterMovie } = appSlice.actions;

export const selectMovieData = (state) => state.app.movieData;

export default appSlice.reducer;
