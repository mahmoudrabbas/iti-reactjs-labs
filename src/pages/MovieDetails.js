import { useParams } from 'react-router-dom';

import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { getMovieDetails } from '../stores/movieSlice';

function MovieDetails() {
    const { id } = useParams();

    const dispatch = useDispatch();

    const { movie, loading, lang } = useSelector((state) => state.movies);

    useEffect(() => {
        dispatch(
            getMovieDetails({
                id,
                lang,
            })
        );
    }, [id, lang]);

    if (loading || !movie) {
        return <h3 className="text-center mt-5">Loading...</h3>;
    }

    return (
        <div className="container mt-4">
            <h2>{movie.title}</h2>

            <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                className="img-fluid"
                alt={movie.title}
            />

            <p className="mt-3">{movie.overview}</p>

            <p>Rating: {movie.vote_average}</p>

            <p>Date: {movie.release_date}</p>
        </div>
    );
}

export default MovieDetails;
