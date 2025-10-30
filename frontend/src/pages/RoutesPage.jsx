import { useEffect, useState } from "react";
import { getRoute } from "../services/api.js";

export default function RoutePage() {
    const [routes, setRoutes] = useState([]);

    useEffect(() => {
        getRoute()
            .then(setRoutes)
            .catch(console.error);
    }, []);

    // Separate routes by type
    const outdoorRoutes = routes.filter((r) => r.isOutdoor);
    const indoorRoutes = routes.filter((r) => !r.isOutdoor);

    return (
        <div className="p-6 space-y-8">
            {/* OUTDOOR ROUTES */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Outdoor Routes</h2>
                {outdoorRoutes.length > 0 ? (
                    <ul className="space-y-2">
                        {outdoorRoutes.map((route) => (
                            <li
                                key={route.routeId}
                                className="p-3 bg-green-200 rounded-lg shadow-sm"
                            >
                                <p className="font-medium">{route.name || "Unnamed Route"}</p>
                                <p className="text-sm text-gray-600">
                                    {route.grade} — {route.style}
                                </p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-500">No outdoor routes found.</p>
                )}
            </section>

            {/* INDOOR ROUTES */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Indoor Routes</h2>
                {indoorRoutes.length > 0 ? (
                    <ul className="space-y-2">
                        {indoorRoutes.map((route) => (
                            <li
                                key={route.routeId}
                                className="p-3 bg-blue-200 rounded-lg shadow-sm"
                            >
                                <p className="font-medium">
                                    {route.name || "Unnamed Route"}
                                </p>
                                <p className="text-sm text-gray-600">
                                    {route.grade} — {route.style}
                                </p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-500">No indoor routes found.</p>
                )}
            </section>
        </div>
    );
}
