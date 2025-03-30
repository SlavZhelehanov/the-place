import { Link } from "react-router";
import { FaPaperclip, FaRegCalendarMinus } from "react-icons/fa6";

export default function UserInfo({ userId }) {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
            <div className="flex justify-between items-center font-medium">
                <span className="text-gray-500">User Information</span>
                <Link to="/" className="text-orange-400 text-xs">See all</Link>
            </div>

            <div className="flex flex-col gap-4 text-gray-500">
                <div className="flex items-center gap-2">
                    <span className="text-xl text-black">Username</span>
                    <span className="text-sm">Email</span>
                </div>
                <p>Description...</p>

                {/* <div className="flex items-center gap-2">
                    <img src="/city.png" alt="" width={16} height={16}/>
                    <span>Living in <b>City</b></span>
                </div> */}
                {/* <div className="flex items-center gap-2">
                    <img src="/school.png" alt="" width={16} height={16}/>
                    <span>Went to <b>school name</b></span>
                </div> */}
                {/* <div className="flex items-center gap-2">
                    <img src="/company.png" alt="" width={16} height={16}/>
                    <span>Works to <b>company name</b></span>
                </div> */}

                <div className="flex items-center justify-between">
                    <div className="flex gap-1 items-center">
                        <FaPaperclip />
                        <Link to="https://theplace.com" className="text-orange-400 font-medium">theplace.com</Link>
                    </div>
                    <div className="flex gap-1 items-center">
                        <iFaRegCalendarMinus />
                        <span>Joined March 2025</span>
                    </div>
                </div>
                <button className="cursor-pointer bg-orange-400 text-white text-sm rounded-md p-2">Follow</button>
                <span className="text-red-400 self-end text-xs cursor-pointer">Block User</span>
            </div>
        </div>
    );
}