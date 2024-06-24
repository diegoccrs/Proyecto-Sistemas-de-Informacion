import { createGlobal, useGlobal} from "react";

// Creamos un Global
export const UserGlobal = createGlobal(null);

// Creamos un hook
export function useUser(){
    const user = useGlobal(UserGlobal);
    return user;
}