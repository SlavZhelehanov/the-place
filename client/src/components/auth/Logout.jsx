import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../contexts/AuthContext";

const SERVER_URL = "http://localhost:3030/users/logout";

export default function Logout() {
    const { isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    useEffect(() => {
        if (isAuthenticated && token) {
            
            fetch(SERVER_URL, {
                method: "GET",
                headers: { "X-Authorization": token }
            }).then(res => {
                logout();

                navigate("/");
            }).catch(err => console.log(err));
        }
    }, [token]);

    return (
        <div className="text-center">
            <p>Logging out...</p>
        </div>
    );
}