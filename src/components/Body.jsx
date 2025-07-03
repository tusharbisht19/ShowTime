import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Browse } from "./Browse.jsx";
import { Login } from "./Login.jsx";
function Body() {
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

export { Body };
