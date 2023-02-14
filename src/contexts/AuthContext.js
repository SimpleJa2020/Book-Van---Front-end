import { createContext, useState, useEffect } from 'react';
import * as tripApi from '../apis/trip-api';
import * as authApi from '../apis/auth-api';
import {
    getAccessToken,
    removeAccessToken,
    setAccessToken
} from '../utils/local-storage';

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
    const [departure, setDeparture] = useState([]);
    const [selectSeat, setSelectSeat] = useState({});

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

    const fetchTerminal = async () => {
        const res = await tripApi.getAllTrip();
        setDeparture(res.data.trips);
    };
    useEffect(() => {
        fetchTerminal();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                authenticatedUser,
                login,
                logout,
                departure,
                setDeparture,
                selectSeat,
                setSelectSeat,
                fetchTerminal
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
