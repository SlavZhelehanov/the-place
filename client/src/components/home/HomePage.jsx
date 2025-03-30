import AddPost from "./center/AddPost";
import Center from "./center/Stories";
import LeftSide from "./leftSide/LeftSide";
import RightSide from "./rightSide/RightSide";
import AllPosts from "./center/AllPosts";

export default function HomePage() {
    return (
        <div className="flex gap-6 pt-6">
            <div className="hidden xl:block w-[20%]"><LeftSide type="home"/></div>

            <div className="w-full lg:w-[70%] xl:w-[50%]">
                <div className="flex flex-col gap-6">
                    <Center />
                    <AddPost />
                    <AllPosts />
                </div>
            </div>

            <div className="hidden lg:block w-[30%]"><RightSide /></div>
        </div>
    );
}