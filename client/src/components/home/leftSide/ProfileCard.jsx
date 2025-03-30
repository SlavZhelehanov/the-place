export default function ProfileCard() {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6">
            <div className="h-20 relative">
                <img src="https://images.pexels.com/photos/29620685/pexels-photo-29620685/free-photo-of-beautiful-waterfall-in-kastamonu-turkey.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className="w-full h-full object-cover rounded-md" />
                <img src="https://images.pexels.com/photos/2446760/pexels-photo-2446760.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width={48} height={48} className="w-12 h-12 object-cover rounded-full absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10" />
            </div>
            <div className="h-20 flex flex-col gap-2 items-center">
                <span className="font-semibold">Your Username</span>
                <div className="flex items-center gap-4">
                    <div className="flex">
                        <img src="https://images.pexels.com/photos/2446760/pexels-photo-2446760.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width={12} height={12} className="w-3 h-3" />
                        <img src="https://images.pexels.com/photos/2446760/pexels-photo-2446760.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width={12} height={12} className="w-3 h-3" />
                        <img src="https://images.pexels.com/photos/2446760/pexels-photo-2446760.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width={12} height={12} className="w-3 h-3" />

                    </div>
                    <span className="text-xs">7M Followers</span>
                </div>
                <button className="cursor-pointer bg-orange-400 text-white text-xs p-2 rounded-md">My Profile</button>
            </div>
        </div>
    );
}