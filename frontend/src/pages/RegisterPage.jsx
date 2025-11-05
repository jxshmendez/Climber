import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function RegisterPage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const res = await axios.post("/api/auth/register", formData);
            setMessage(res.data.message  || "Registration Successful");

            setTimeout(() => navigate("/login"), 1500);
        } catch (err){
            setMessage(err.response?.data || "Registration Failed");
        }
    };

    return(
        <section className={"min-h-screen flex flex-col justify-center items-center bg-[#fef6e0] text-black p-6"}>
            <h1 className={"text-6xl anton-sc-regular mb-10 text-[#ff5317]"}>REGISTER</h1>

            <form
                onSubmit={handleSubmit}
                className={"w-full max-w-sm bg-white p-8 rounded-2xl shadow-md border border-[#ff5317]"}
            >
                <div className={"mb-5"}>
                    <label htmlFor="username" className={"block font-semibold mb-1"}>
                        Username
                    </label>
                    <input
                        type={"text"}
                        id={"username"}
                        name={"username"}
                        value={formData.username}
                        onChange={handleChange}
                        className={"w-full p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#ff5317]"}
                        required
                    />
                </div>

                <div className={"mb-5"}>
                    <label htmlFor="email" className={"block font-semibold mb-1"}>
                        Email
                    </label>
                    <input
                        type={"email"}
                        id={"email"}
                        name={"email"}
                        value={formData.email}
                        onChange={handleChange}
                        className={"w-full p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#ff5317]"}
                        required
                    />
                </div>

                <div className={"mb-5"}>
                    <label htmlFor="password" className={"block font-semibold mb-1"}>
                        Password
                    </label>
                    <input
                        type={"password"}
                        id={"password"}
                        name={"password"}
                        value={formData.password}
                        onChange={handleChange}
                        className={"w-full p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#ff5317]"}
                        required
                    />
                </div>

                <button
                    type={"submit"}
                    className={"w-full py-2 bg-[#ff5317] text-white font-semibold rounded-md hover:bg-[#e44b15] transition-all"}
                >
                    Create Account
                </button>

                {message && (
                    <p className={"mt-4 text-centre text-sm text-gray-700"}>{message}</p>
                )}
            </form>

            <p className="mt-4 text-sm text-gray-600">
                Already have an account?{" "}
                <button
                    onClick={() => navigate("/login")}
                    className="text-[#ff5317] font-semibold hover:underline"
                >
                    Log in
                </button>
            </p>
        </section>
    )
}
