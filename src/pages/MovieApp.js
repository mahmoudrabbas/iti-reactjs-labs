import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { getMovies, addFavorite, removeFavorite } from '../stores/movieSlice';

import { Link } from 'react-router-dom';

function MovieApp() {
    const dispatch = useDispatch();

    const { movies, loading, lang, favorites } = useSelector(
        (state) => state.movies
    );

    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(
            getMovies({
                page,
                lang,
            })
        );
    }, [page, lang]);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div className="container mt-4">
            <h2>{lang === 'ar' ? 'الأفلام' : 'Movies'}</h2>

            <div className="row">
                {movies.map((movie) => {
                    const isFav = favorites.find((f) => f.id === movie.id);

                    return (
                        <div className="col-md-3" key={movie.id}>
                            <div className="card mb-3">
                                <button
                                    className="btn btn-warning btn-sm"
                                    onClick={() =>
                                        dispatch(
                                            isFav
                                                ? removeFavorite(movie.id)
                                                : addFavorite(movie)
                                        )
                                    }
                                >
                                    {isFav ? 'Remove ⭐' : 'Add ⭐'}
                                </button>
                                <img
                                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                    className="card-img-top"
                                    alt={movie.title}
                                />

                                <div className="card-body">
                                    <h6>{movie.title}</h6>

                                    <Link
                                        to={`/movie/${movie.id}`}
                                        className="btn btn-primary btn-sm"
                                    >
                                        {lang === 'ar' ? 'التفاصيل' : 'Details'}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="d-flex justify-content-center mt-4 gap-2">
                <button
                    className="btn btn-secondary"
                    disabled={page === 1}
                    onClick={() => setPage(page - 1)}
                >
                    Prev
                </button>

                <span className="mt-2">Page {page}</span>

                <button
                    className="btn btn-secondary"
                    onClick={() => setPage(page + 1)}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default MovieApp;
