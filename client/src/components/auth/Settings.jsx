import { useEffect, useState } from "react";
import { Link } from "react-router";

const SERVER_URL = "http://localhost:3030/users/me";

export default function Settings() {
    const [account, setAccount] = useState({});

    useEffect(() => {
        const token = localStorage.getItem("token");

        fetch(SERVER_URL, {
            method: "GET",
            headers: { "X-Authorization": token }
        }).then(res => res.json()).then(setAccount);
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <div className="flex flex-col items-center">
                    <div className="relative">
                        <img
                            src={account?.profilePicture || `https://robohash.org/${account.username}`}
                            alt="Profile"
                            className="w-24 h-24 rounded-full object-cover border-2 border-orange-500"
                        />
                        <Link
                            to="/auth/update-profile-picture"
                            className="absolute bottom-0 right-0 bg-orange-500 text-white text-xs px-2 py-1 rounded-full hover:bg-orange-600"
                        >
                            Edit
                        </Link>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-800 mt-4">{account?.username || "Username"}</h2>
                    <p className="text-gray-600">{account?.email || "Email"}</p>
                </div>
                <div className="mt-6">
                    <h3 className="text-lg font-medium text-gray-800 mb-2">Account Details</h3>
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between">
                            <span className="text-gray-600">Username:</span>
                            <span className="text-gray-800 font-medium">{account?.username || "N/A"}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Email:</span>
                            <span className="text-gray-800 font-medium">{account?.email || "N/A"}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}