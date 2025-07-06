import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Movies } from "./components/Movies.jsx";
import { Login } from "./pages/Login.jsx";
import { Home } from "./pages/Home.jsx";
import { Signup } from "./pages/Signup.jsx";
function App() {
  return (
    <div className="min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
