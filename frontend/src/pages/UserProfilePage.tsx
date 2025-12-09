import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import FollowButton from "../components/FollowButton";
import { UserPreviewDTO } from "../types/UserPreviewDTO";

export default function UserProfilePage() {
    const {userId} = useParams();
    const [user, setUser] = useState<UserPreviewDTO | null>(null);
    const [loading, setLoading] = useState(true);

    async function loadUser() {
        try {
            const token = localStorage.getItem("token");

            const res = await axios.get<UserPreviewDTO>(
                `/api/users/id/${userId}`,
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );

            setUser(res.data);
        } catch (err) {
            console.error("Failed to load user", err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (!userId) return;
        loadUser();
    }, [userId]);


    if(!user) return <p>User not found</p>;

    return (
        <div className={"flex flex-col items-center justify-center pt-4"}>
            <img
                src={user.avatarUrl || "/public/chicken.png"}
                alt={user.username}
                className={"w-20 h-20 rounded-full object-cover"}
            />
            <div className="items-center flex-1">
                <h1 className="text-2xl font-bold">@{user.username}</h1>
            </div>

            <div className="flex items-center gap-4">
                <p className="text-gray-600">{user.bio || "Empty"}</p>
            </div>

            <div className="flex items-center gap-4 pb-4">
                <p>Followers: {user.followerCount}</p>
                <p>Following: {user.followingCount}</p>
            </div>
            <FollowButton
                targetUserId={user.userId}
                onChange={loadUser}
            />
        </div>
    );
}