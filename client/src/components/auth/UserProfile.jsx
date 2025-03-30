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
            <div className="hidden xl:block w-[20%]"><LeftSide /></div>

            <div className="w-full lg:w-[70%] xl:w-[50%]">
                <div className="flex flex-col gap-6">
                    <AllPosts />
                </div>
            </div>

            <div className="hidden lg:block w-[30%]"><RightSide userId={user?._id} /></div>
        </div>
    );
}