import { createContext, useState } from 'react';

export const AuthContext = createContext();

export function AuthContextWrapper({ children }) {
    const [login, setLogin] = useState(false);
    const isLogin = () => setLogin(!login);
    return (
        <AuthContext.Provider value={{ login }}>
            {children}
        </AuthContext.Provider>
    );
}
