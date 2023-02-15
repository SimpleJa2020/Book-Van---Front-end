import { createContext, useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';
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
    const [getme, setGetMe] = useState({});
    const [tkList, setTkList] = useState([]);
    const refresh = () => window.location.reload(true);
    const [authenticatedUser, setAuthenticatedUser] = useState(
        getAccessToken() ? true : null
    );

    useEffect(() => {
        const fetchAuthUser = async () => {
            try {
                // const res = await authApi.getMe();
                const token = await getAccessToken();
                const user = await jwtDecode(token);
                setAuthenticatedUser(user);

                //  ไปหน้า home
            } catch (err) {
                removeAccessToken();
                // Go login
            }
        };
        if (getAccessToken()) {
            // console.log('5555');
            fetchAuthUser();
        }
    }, []);

    const getUserData = async () => {
        try {
            // const res = await authApi.getMe();
            const token = await getAccessToken();
            const user = await jwtDecode(token);
            return user;
            //  ไปหน้า home
        } catch (err) {
            return false;
        }
    };

    const login = async (emailOrMobile, password) => {
        const res = await authApi.login({ emailOrMobile, password });
        setAccessToken(res.data.accessToken);
        setAuthenticatedUser(true);
        refresh();
    };

    const logout = () => {
        removeAccessToken();
        setAuthenticatedUser(null);
        refresh();
    };

    const fetchTerminal = async () => {
        const res = await tripApi.getAllTrip();
        setDeparture(res.data.trips);
    };
    useEffect(() => {
        if (authenticatedUser) {
            fetchTerminal();
        }
    }, []);

    // if (authenticatedUser) {
    //     console.log(JSON.stringify(authenticatedUser.role));
    // }
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
                fetchTerminal,
                getUserData,
                setGetMe,
                getme,
                tkList,
                setTkList
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
