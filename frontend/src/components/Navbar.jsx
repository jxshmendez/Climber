import { NavLink } from "react-router-dom";

export default function Navbar() {
    const linkClasses = ({ isActive }) =>
        isActive ? "text-[#CBD081]" : "text-black";

    return (
        <nav className="w-full flex items-center justify-between p-4 bg-[#FAF9F6] text-black">
            {/* Left side links */}
            <div className="flex gap-6">
                <NavLink to="/" className={linkClasses}>Home</NavLink>
                <NavLink to="/gyms" className={linkClasses}>Gyms</NavLink>
                <NavLink to="/users" className={linkClasses}>Users</NavLink>
                <NavLink to="/routes" className={linkClasses}>Routes</NavLink>
            </div>

            {/* Right side button */}
            <NavLink
                to="/join"
                className="border border-[#CBD081] text-[#CBD081] px-7 py-1.5 rounded-md
                hover:bg-[#CBD081]
                hover:text-gray-900 transition"
            >Join</NavLink>
        </nav>
    );
}
