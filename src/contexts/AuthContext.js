import { createContext, useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import * as authApi from '../apis/auth-api';
import {
    getAccessToken,
    removeAccessToken,
    setAccessToken
} from '../utils/local-storage';

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
    const [getUser, setGetUser] = useState({});
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
    const fetchGetUser = async () => {
        try {
            const res = await authApi.getMe();
            setGetUser(res.data.passengers);
        } catch (err) {}
    };
    useEffect(() => {
        fetchGetUser();
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

    return (
        <AuthContext.Provider
            value={{
                authenticatedUser,
                login,
                logout,

                getUserData,
                setGetUser,
                getUser,
                tkList,
                setTkList
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
