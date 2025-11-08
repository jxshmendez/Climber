import { NavLink } from "react-router-dom";

export default function Navbar() {
    const linkClasses = ({ isActive }) =>
        isActive ? "text-[#E35335]" : "text-black";

    return (
        <nav className="noto-sans-display text-xl w-full  text-black p-4 border-b border-transparent fixed">
            <div className="flex items-center justify-center border border-[#ff5317] w-[25%] mx-auto p-3 rounded-4xl">

                {/* Center - Nav links */}
                <div className="flex gap-10">
                    <NavLink to={"/"} className="inter text-[#ff5317]">
                        WALL
                    </NavLink>
                    <NavLink to="/features" className={linkClasses}>Features</NavLink>
                    <NavLink to="/about" className={linkClasses}>About</NavLink>
                    <NavLink
                        to="/register"
                        className="inter flex items-center bg-[#ff5317] text-black px-4
                          rounded-4xl hover:bg-[#FFDEAD] transition">
                        JOIN
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}
