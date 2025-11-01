import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GymsPage from "./pages/GymsPage";
import UsersPage from "./pages/UsersPage";
import RoutesPage from "./pages/RoutesPage";
import JoinPage from "./pages/JoinPage";
import Navbar from "./components/Navbar";


export default function App() {
    return (
    <div className="min-h-screen bg-[#fef6e0] text-black">
        <Router>
            <Navbar />
            <Routes>
                <Route path={"/"} element={<HomePage />} />
                <Route path={"/gyms"} element={<GymsPage />} />
                <Route path={"/users"} element={<UsersPage />} />
                <Route path="/routes" element={<RoutesPage />} />
                <Route path="/waitlist" element={<JoinPage />} />
            </Routes>
        </Router>
    </div>
    );

}
