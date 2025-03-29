import Comments from "./Comments";

export default function Post() {
    return (
        <div className="flex flex-col gap-4">

            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <img src="https://images.pexels.com/photos/31301005/pexels-photo-31301005/free-photo-of-vintage-car-in-historic-culross-scotland.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" width={40} height={40} className="w-10 h-10 rounded-full" />
                    <span className="font-medium">Ivan Shishman</span>
                </div>
                <img src="/more.png" alt="" width={16} height={16} />
            </div>

            <div className="flex flex-col gap-4">
                <div className="w-full min-h-96 relative">
                    <img src="https://images.pexels.com/photos/31312031/pexels-photo-31312031/free-photo-of-colorful-rainbow-lorikeet-on-a-bare-branch.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" className="w-full h-full object-cover rounded-md" />
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure ducimus odit est consequuntur vero maiores sit, illo commodi similique necessitatibus reprehenderit optio eius eaque animi adipisci sunt natus rerum accusamus.</p>
            </div>

            <div className="flex items-center justify-between text-sm my-4">

                <div className="flex gap-8">
                    <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                        <img src="/like.jpg" alt="" width={16} height={16} className="cursor-pointer" />
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500">123<span className="hidden md:inline"> Likes</span></span>
                    </div>

                    <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                        <img src="/comment.png" alt="" width={16} height={16} className="cursor-pointer" />
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500">123<span className="hidden md:inline"> Comments</span></span>
                    </div>
                </div>

                <div className="">
                    <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                        <img src="/share.png" alt="" width={16} height={16} className="cursor-pointer" />
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500">123<span className="hidden md:inline"> Shares</span></span>
                    </div>
                </div>

            </div>

            <Comments />

        </div>
    );
}