import { createContext, useState } from 'react';

export const NavbarContext = createContext();

export function NavbarContextWrapper({ children }) {
    const [val, setVal] = useState(false);
    const toggle = () => setVal(!val);
    return (
        <NavbarContext.Provider value={{ val, toggle }}>
            {children}
        </NavbarContext.Provider>
    );
}
