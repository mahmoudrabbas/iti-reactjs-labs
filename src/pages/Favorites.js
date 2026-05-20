import { useSelector } from 'react-redux';

function Favorites() {
    const { favorites } = useSelector((state) => state.movies);

    return (
        <div className="container mt-4">
            <h2>⭐ Favorites</h2>

            <div className="row">
                {favorites.length === 0 && <h4>No favorites yet</h4>}

                {favorites.map((movie) => (
                    <div className="col-md-3" key={movie.id}>
                        <div className="card mb-3">
                            <img
                                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                className="card-img-top"
                            />

                            <div className="card-body">
                                <h6>{movie.title}</h6>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Favorites;
