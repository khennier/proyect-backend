import { createContext, useState, useContext } from "react";
import { registerRequest } from '../api/auth.js';

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth must be within an authProvider')
    }
    return context;
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const signup = async (userData) => {
        try {
            const res = await registerRequest(userData);
            setUser(res.data);
            console.log(res);
        } catch (error) {
            console.error(error);
        }
        }

    return (
        <AuthContext.Provider value={{ user, signup }}>
            {children}
        </AuthContext.Provider>
    ); 

};
