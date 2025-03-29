import { useNavigate } from 'react-router';
import { useAuth } from '../../contexts/AuthContext';
import { useEffect } from 'react';

export const ProtectedFromUserRoute = ({ children }) => {
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth() || {};

    useEffect(() => {
        if (isAuthenticated) navigate("/");
    }, [isAuthenticated]);

    return children;
};

export const ProtectedForUserRoute = ({ children }) => {
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth() || {};

    useEffect(() => {
        if (!isAuthenticated) navigate("/auth/login");
    }, [isAuthenticated]);

    return children;
};