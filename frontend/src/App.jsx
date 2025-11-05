import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage.jsx";
import AboutPage from "./pages/AboutPage";
import FeaturesPage from "./pages/FeaturesPage";
import LoginPage from "./pages/LoginPage";
import LoggedInNavbar from "./components/LoggedInNavbar";
import DashboardPage from "./pages/DashboardPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {isLoggedIn} from "./utils/auth";

export default function App() {
    const loggedIn = isLoggedIn();

    return (
    <div className="min-h-screen bg-[#fef6e0] text-black">
        <Router>
            {loggedIn ? <LoggedInNavbar/> : <Navbar/>}

            <Routes>
                <Route path={"/"} element={<HomePage />} />
                <Route path={"/features"} element={<FeaturesPage />} />
                <Route path={"/about"} element={<AboutPage s/>} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path={"/dashboard"} element={<DashboardPage/>}/>
            </Routes>

            {loggedIn? null : <Footer/>}
        </Router>
    </div>
    );

}
