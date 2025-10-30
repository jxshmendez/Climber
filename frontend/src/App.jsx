import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GymsPage from "./pages/GymsPage";
import UsersPage from "./pages/UsersPage";
import RoutesPage from "./pages/RoutesPage";

export default function App() {
    return (
        <Router>
            <nav className="flex gap-4 p-4 bg-gray-800 text-white">
                <Link to="/">Home</Link>
                <Link to="/gyms">Gyms</Link>
                <Link to="/users">Users</Link>
                <Link to={"/routes"}>Routes</Link>
            </nav>


            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/gyms" element={<GymsPage />} />
                <Route path="/users" element={<UsersPage />} />
                <Route path={"/routes"} element={<RoutesPage/>} />
            </Routes>
        </Router>
    )
}