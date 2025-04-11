import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { IUser } from "../types/user.interface";
import { clearToken, clearUser, getUser, setToken, setUser as setUserInStorage } from "@lib/storage";

interface AuthContextType {
    user: IUser | null;
    setUser: (user: IUser | null) => void;
    isAuthenticated: boolean;
    login: (data: {user: IUser, token: string}) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    setUser: () => {},
    isAuthenticated: false,
    login: () => {},
    logout: () => {},
});

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if(!context){
        throw new Error("useAuthContext must be used within an AuthProvider");
    }

    return context;
}

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<IUser | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const user = getUser();
        if(user){
            setUser(user);
            setIsAuthenticated(true);        
        }
    }, []);

    const login = (data: {user: IUser, token: string}) => {
        setUserInStorage(data.user);
        setUser(data.user); 
        setToken(data.token);
        setIsAuthenticated(true);
    };

    const logout = () => {
        setUser(null);
        clearUser();
        clearToken();
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ user, setUser,  login, logout, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};