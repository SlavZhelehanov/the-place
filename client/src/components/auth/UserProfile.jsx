import { useEffect, useState } from "react";

import AllPosts from "../home/center/AllPosts";
import LeftSide from "../home/leftSide/LeftSide";
import RightSide from "../home/rightSide/RightSide";

const SERVER_URL = "http://localhost:3030/users/me";

export default function UserProfile() {
    const [user, setUser] = useState();

    useEffect(() => {
        const token = localStorage.getItem("token");

        fetch(SERVER_URL, {
            method: "GET",
            headers: { "X-Authorization": token }
        }).then(res => {
            if (res.statusText === "Forbidden") {
                logout();
                navigate("/auth/login");
            } else return res.json();
        }).then(setUser).catch(err => {
            logout();
            navigate("/auth/login");
        });
    });

    return (
        <div className="flex gap-6 pt-6">
            <div className="hidden xl:block w-[20%]"><LeftSide type="profile" /></div>

            <div className="w-full lg:w-[70%] xl:w-[50%]">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col items-center justify-center">
                        <div className="w-full h-64 relative">
                            <img src="https://images.pexels.com/photos/27832008/pexels-photo-27832008/free-photo-of-a-woman-is-walking-through-a-field-of-red-flowers.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className="w-full h-full rounded-md object-cover" />
                            <img src="https://images.pexels.com/photos/30378375/pexels-photo-30378375/free-photo-of-moroccan-musician-with-guitar-in-rabat-street.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" width={128} height={128} alt="" className="w-32 h-32 rounded-full absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white object-cover" />
                        </div>
                        <h1 className="mt-20 mb-4 text-2xl font-medium">Yours Names</h1>
                        <div className="flex items-center justify-center gap-12 mb-4">
                            <div className="flex flex-col items-center">
                                <span className="font-medium">123</span>
                                <span className="text-sm">Posts</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="font-medium">23</span>
                                <span className="text-sm">Followers</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="font-medium">231</span>
                                <span className="text-sm">Following</span>
                            </div>
                        </div>
                    </div>
                    <AllPosts />
                </div>
            </div>

            <div className="hidden lg:block w-[30%]"><RightSide userId={user?._id} /></div>
        </div>
    );
}