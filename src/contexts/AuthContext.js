import { createContext, useState, useEffect } from 'react';
import * as departureApi from '../apis/departure-api';
import * as authApi from '../apis/auth-api';
import {
    getAccessToken,
    removeAccessToken,
    setAccessToken
} from '../utils/local-storage';

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
    const [departure, setDeparture] = useState([]);
    const [authenticatedUser, setAuthenticatedUser] = useState(
        getAccessToken() ? true : null
    );

    const login = async (emailOrMobile, password) => {
        const res = await authApi.login({ emailOrMobile, password });
        setAccessToken(res.data.accessToken);
        setAuthenticatedUser(true);
    };

    const logout = () => {
        removeAccessToken();
        setAuthenticatedUser(null);
    };

    useEffect(() => {
        const fetchTerminal = async () => {
            const res = await departureApi.getAllDeparture();
            setDeparture(res.data.departure);
        };
        fetchTerminal();
    }, []);

    return (
        <AuthContext.Provider
            value={{ authenticatedUser, login, logout, departure }}
        >
            {children}
        </AuthContext.Provider>
    );
}
