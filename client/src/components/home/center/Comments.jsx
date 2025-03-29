export default function Comments() {
    return (
        <div className="">

            <div className="flex items-center gap-4">
                <img src="https://images.pexels.com/photos/6897336/pexels-photo-6897336.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" width={32} height={32} className="w-8 h-8 rounded-full" />

                <div className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
                    <input type="text" placeholder="Write a comment..." className="bg-transparent outline-none flex-1" />
                    <img src="emoji.jpg" alt="" width={16} height={16} className="cursor-pointer" />
                </div>
            </div>

            <div className="">
                <div className="flex gap-4 justify-between mt-6">

                    <img src="https://images.pexels.com/photos/6897336/pexels-photo-6897336.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" width={40} height={40} className="w-10 h-10 rounded-full" />

                    <div className="flex flex-col gap-2 flex-1">
                        <span className="font-medium">Bud Spencer</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat accusantium optio reprehenderit modi culpa voluptates sequi ullam sunt autem. Odio, temporibus reprehenderit voluptates cumque et ea quasi. Eos, fugiat beatae!</p>
                        <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
                            <div className="flex items-center gap-4">
                                <img src="like.jpg" alt="" width={16} height={16} className="cursor-pointer" />
                                <span className="text-gray-300">|</span>
                                <span className="text-gray-500">123 Likes</span>
                            </div>
                        </div>
                    </div>

                    <img src="/more.png" alt="" width={16} height={16} className="cursor-pointer w-4 h-4" />

                </div>

            </div>

        </div>
    );
}