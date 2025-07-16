// React
import { createContext, ReactNode, useState } from "react"

//Providers
import {AdminProvider } from "./AdimSystemContext.tsx";

// Interface
import { AppContextType } from "./types/AppContextTypes.ts";
import { AuthProvider } from "./AuthContext.tsx";

interface AppProviderProps {
  children: ReactNode;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    
    const [urlAPI, setUrlAPI] = useState<string>('')

    return (<>
        <AuthProvider>
            <AdminProvider>
                <AppContext.Provider value={{
                    urlAPI, setUrlAPI
                }}>
                    {children}
                </AppContext.Provider>
            </AdminProvider>

        </AuthProvider>
    </>)
}