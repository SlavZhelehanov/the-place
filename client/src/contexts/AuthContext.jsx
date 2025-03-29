// authContext.js
import { createContext, useContext, useState, useEffect } from 'react';

// Create Context
const AuthContext = createContext();

// Custom hook to use the AuthContext
export const useAuth = () => {
    return useContext(AuthContext);
};

// AuthProvider component to wrap your app and provide context
export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Check if the user is authenticated when the app loads
    useEffect(() => {
        const token = localStorage.getItem("token");
        const user = localStorage.getItem("user");

        if (token && user) {
            setIsAuthenticated(true);
        }
    }, []);

    // Login and Logout functions
    const login = ({ email, username, _id, accessToken }) => {
        setIsAuthenticated(true);
        localStorage.setItem("token", accessToken); // Replace with actual token logic
        localStorage.setItem("user", JSON.stringify({ email, username, _id })); // Replace with actual token logic
    };

    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
