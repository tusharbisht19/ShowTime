import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Browse } from "./components/Browse.jsx";
import { Login } from "./pages/Login.jsx";
function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-700">
      <BrowserRouter>
        <nav className="flex gap-4 p-2 bg-gray-300 ">
          <Link to="/login" className="text-blue hover:underline">
            Login
          </Link>
          <Link to="/browse" className="text-blue hover:underline">
            Browse
          </Link>
        </nav>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/browse" element={<Browse />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
