import Promotion from "../Promotion";
import UserCard from "../user/UserCard";
import UserInfo from "../user/UserInfo";
import Birthdays from "./Birthdays";
import FriendRequests from "./FriendRequests";

export default function RightSide({ userId }) {
    return (
        <div className="flex flex-col gap-6">
            {userId ?
                (<>
                    <UserInfo userId={userId} />
                    <UserCard userId={userId} />
                </>)
                : null}
            <FriendRequests />
            <Birthdays />
            <Promotion size={"md"} />
        </div>
    );
}