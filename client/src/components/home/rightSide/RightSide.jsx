import Promotion from "../Promotion";
import Birthdays from "./Birthdays";
import FriendRequests from "./FriendRequests";

export default function RightSide({ userId = '' }) {
    return (
        <div className="flex flex-col gap-6">
            <FriendRequests />
            <Birthdays />
            <Promotion size={"md"} />
        </div>
    );
}