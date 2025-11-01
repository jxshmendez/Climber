import { NavLink } from "react-router-dom";

export default function Navbar() {
    const linkClasses = ({ isActive }) =>
        isActive ? "text-[#CBD081]" : "text-black-100";

    return (
        <nav className="w-full flex gap-6 p-4 bg-[#FAF9F6] text-black">
            <NavLink to="/" className={linkClasses}>Home</NavLink>
            <NavLink to="/gyms" className={linkClasses}>Gyms</NavLink>
            <NavLink to="/users" className={linkClasses}>Users</NavLink>
            <NavLink to="/routes" className={linkClasses}>Routes</NavLink>
        </nav>
    );
}
