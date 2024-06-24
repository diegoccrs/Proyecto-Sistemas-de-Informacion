
import { createContext, useContext} from "react";

// Creamos un Context
export const UserContext = createContext(null);

// Creamos un hook
export function useUser(){
    const user = useContext(UserContext);
    return user;
}