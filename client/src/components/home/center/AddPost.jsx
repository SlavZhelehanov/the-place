export default function AddPost() {
    return (
        <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
            <img src="https://images.pexels.com/photos/31361239/pexels-photo-31361239/free-photo-of-fresh-strawberries-in-elegant-wine-glass.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" width={48} height={48} className="w-12 h-12 object-cover rounded-full" />

            <div className="flex-1">
                <div className="flex gap-4">
                    <textarea placeholder="Tell me a story" className="bg-slate-100 rounded-lg flex-1 p-2"></textarea>
                    <img src="/emoji.jpg" alt="" width={20} height={20} className="w-5 h-5 cursor-pointer self-end" />
                </div>

                <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap"></div>
            </div>
        </div>
    );
}