import { createContext, useCallback, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const serverUrl = import.meta.env.VITE_BACKEND_URL;

    const [loggedIn, setLoggedIn] = useState(null);
    const [user, setUser] = useState(null);

    const checkLoginState = useCallback(async () => {
        try {
            const { data: { loggedIn: logged_in, user } } = await axios.get(`${serverUrl}/usuarios/auth/logged_in`);
            setLoggedIn(logged_in);
            user && setUser(user);
        } catch (err) {
            console.error(err);
        }
    }, []);

    useEffect(() => {
        checkLoginState();
    }, [checkLoginState]);

    return (
        <AuthContext.Provider value={{ loggedIn, checkLoginState, user }}>
            {children}
        </AuthContext.Provider>
    );
}