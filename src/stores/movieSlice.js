import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

const apiKey = '4dbb3243bf6793d13e7f8dace3881c64';

export const getMovies = createAsyncThunk(
    'movies/getMovies',

    async ({ page, lang }) => {
        const response = await axios.get(
            'https://api.themoviedb.org/3/movie/popular',
            {
                params: {
                    api_key: apiKey,
                    page,
                    language: lang,
                },
            }
        );

        // console.log(response.data)
        return response.data.results;
    }
);

export const getMovieDetails = createAsyncThunk(
    'movies/getMovieDetails',

    async ({ id, lang }) => {
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${id}`,
            {
                params: {
                    api_key: apiKey,
                    language: lang,
                },
            }
        );

        return response.data;
    }
);

const movieSlice = createSlice({
    name: 'movies',

    initialState: {
        movies: [],
        movie: null,
        favorites: [],
        loading: false,
        lang: 'en-US',
    },

    reducers: {
        changeLanguage: (state, action) => {
            state.lang = action.payload;
        },

        addFavorite: (state, action) => {
            const exists = state.favorites.find(
                (m) => m.id === action.payload.id
            );

            if (!exists) {
                state.favorites.push(action.payload);
            }
        },

        removeFavorite: (state, action) => {
            state.favorites = state.favorites.filter(
                (m) => m.id !== action.payload
            );
        },
    },

    extraReducers: (builder) => {
        builder.addCase(getMovies.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(getMovies.fulfilled, (state, action) => {
            state.loading = false;

            state.movies = action.payload;
        });

        builder.addCase(getMovieDetails.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(getMovieDetails.fulfilled, (state, action) => {
            state.loading = false;

            state.movie = action.payload;
        });
    },
});

export const { changeLanguage, addFavorite, removeFavorite } =
    movieSlice.actions;

export default movieSlice.reducer;
