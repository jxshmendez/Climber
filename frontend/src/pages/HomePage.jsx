export default function HomePage() {
    return (
        <div className="text-center p-10">
            <h1 className="text-7xl font-bold text-black animate-fadeIn p-2">
                Climbing Social
            </h1>
            <h1 className={"text-6xl font-bold"}>
                <span className="text-[#CBD081] p-2">For those who live on the wall</span>
            </h1>
            <p className="mt-2 text-gray-700 font-bold pb-8">Built for climbers, by climbers</p>

            <div className="mt-8">
                <button className="px-6 py-3 bg-[#CBD081] text-gray-900 font-semibold rounded-md
                 hover:bg-[#b8c06e] transition">
                    Get Started
                </button>
                <button className="ml-4 px-6 py-3 border border-[#CBD081] text-[#CBD081] rounded-md
                 hover:bg-[#CBD081] hover:text-gray-900 transition">
                    Learn More
                </button>
                <section className="mt-16 max-w-2xl mx-auto text-gray-500">
                    <p>
                        Climbing Social helps you track progress, connect with other climbers, and share your
                        favourite sends. Built to motivate you on and off the wall.
                    </p>
                </section>
                <section className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 px-10 text-center">
                    <div>
                        <h3 className="text-xl font-semibold text-[#CBD081]">Track Progress</h3>
                        <p className="text-gray-400 mt-2">
                            Log your climbs, track grades, and watch your improvement over time.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-[#CBD081]">Connect</h3>
                        <p className="text-gray-400 mt-2">
                            Follow friends, share sends, and cheer each other on.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-[#CBD081]">Discover Gyms</h3>
                        <p className="text-gray-400 mt-2">
                            Find and review climbing gyms around you.
                        </p>
                    </div>
                </section>
            </div>
        </div>

    );
}
