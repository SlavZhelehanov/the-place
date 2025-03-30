export default function Promotion({ size }) {
    // size = "sm" | "md" | "lg"
    return (
        <div className="p-4 bg-white rounded-lg shadow-md text-sm">
            <div className="flex items-center justify-between text-gray-500 font-medium">
                <span>Ads</span>
                <img src="/more.png" alt="" width={16} height={16} className="cursor-pointer" />
            </div>

            <div className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}>
                <div className={`relative w-full ${size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"}`}>
                    <img src="https://images.pexels.com/photos/20269133/pexels-photo-20269133/free-photo-of-hand-of-a-person-holding-a-camera-against-fallen-autumn-leaves.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className="w-full h-full object-cover rounded-lg" />
                </div>

                <div className="flex items-center gap-4">
                    <img src="https://images.pexels.com/photos/20269133/pexels-photo-20269133/free-photo-of-hand-of-a-person-holding-a-camera-against-fallen-autumn-leaves.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width={24} height={24} className="object-cover rounded-full w-6 h-6" />
                    <span className="text-orange-400 font-medium">Good Person</span>
                </div>
                <p className={size === "sm" ? "text-xs" : "text-sm"}>
                    {size === "sm"
                        ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        : size === "md"
                            ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                            : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                    }
                </p>
                <button className="cursor-pointer bg-gray-200 text-gray-500 p-2 text-xs rounded-lg">Learn more</button>
            </div>
        </div>
    );
}