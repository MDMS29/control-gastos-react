import { createContext, useCallback, useEffect, useState } from "react";
import ConexionWS from "../config/ConexionWS";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [loggedIn, setLoggedIn] = useState(null);
    const [user, setUser] = useState(null);

    const checkLoginState = useCallback(async () => {
        try {
            const { data: { loggedIn: logged_in, user } } = await ConexionWS.get(`/usuarios/auth/logged_in`);
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