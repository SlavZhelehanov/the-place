import { Link } from "react-router";

import BurgerMenu from "./BurgerMenu";
import { FaHouse, FaUsers, FaBookOpenReader } from "react-icons/fa6";

export default function Navigation() {
    return (
        <div className="flex items-center justify-between h-24">

            <div className="md:hidden lg:block w-[20%]">
                <Link to="/" className="font-bold text-xl text-orange-500">THE PLACE</Link>
            </div>

            <div className="hidden md:flex w-[50%] text-sm">
                <div className="flex gap-6 text-gray-600">
                    <Link to="/" className="flex items-center gap-2"><FaHouse /><span>Home</span></Link>
                    <Link to="/" className="flex items-center gap-2"><FaUsers /><span>Friends</span></Link>
                    <Link to="/" className="flex items-center gap-2"><FaBookOpenReader /><span>Stories</span></Link>
                </div>
            </div>

            <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
                <BurgerMenu />
            </div>

        </div>
    );
}