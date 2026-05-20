import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { changeLanguage } from '../stores/movieSlice';

function Navbar() {
    const dispatch = useDispatch();

    const { lang } = useSelector((state) => state.movies);

    const handleLanguage = () => {
        if (lang === 'en-US') {
            dispatch(changeLanguage('ar'));

            document.body.dir = 'rtl';
        } else {
            dispatch(changeLanguage('en-US'));

            document.body.dir = 'ltr';
        }
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <span className="navbar-brand">My App</span>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/movies">
                                Movie App
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/todo">
                                Todo App
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/fav">
                                Favorites
                            </Link>
                        </li>
                    </ul>

                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <button
                                className="btn btn-warning me-3"
                                onClick={handleLanguage}
                            >
                                {lang === 'en-US' ? 'العربية' : 'English'}
                            </button>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/login">
                                Login
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/register">
                                Register
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
