import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Movies from './pages/MovieApp';
import Navbar from './components/Navbar';
import TodoApp from './pages/TodoApp';
import Login from './pages/Login';
import Register from './pages/Register';
import MovieDetails from './pages/MovieDetails';
import Protoflio from './pages/Protoflio';
import Favorites from './pages/Favorites';

function App() {
    return (
        <>
            <div className="container">
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/movies" element={<Movies />} />
                        <Route path="/fav" element={<Favorites />} />
                        <Route path="/todo" element={<TodoApp />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/movie/:id" element={<MovieDetails />} />
                    </Routes>
                </BrowserRouter>
            </div>

            {/* <Protoflio /> */}
        </>
    );
}

export default App;
