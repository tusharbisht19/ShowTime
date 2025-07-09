import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { Login } from "./pages/Login.jsx";
import { Signup } from "./pages/Signup.jsx";
import { Movies } from "./pages/Movies.jsx";
import { MovieDetails } from "./pages/MovieDetails.jsx";
import { TvShows } from "./pages/TvShows.jsx";
import {TvShowDetails} from "./pages/TvShowDetails.jsx";
import { Watchlist } from "./pages/Watchlist.jsx";
function App() {
  return (
    <div className="min-h-screen bg-black">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/movie/:id" element={<MovieDetails />}></Route>
          <Route path="/tv" element={<TvShows />}></Route>
          <Route path="/tv/:id" element={<TvShowDetails/>}></Route>
          <Route path="/watchlist" element={<Watchlist />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
