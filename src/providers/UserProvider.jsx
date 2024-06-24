
//El UserGlobal es un objeto de contexto que se utiliza para compartir el tema entre componentes.
import { UserGlobal } from '../global/user';

// se importa el hook useState desde la biblioteca react. El hook useState se utiliza para gestionar el estado del 
// user en el componente UserProvider.
import { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { collection,getDocs,doc,getDoc } from "firebase/firestore";
import { db } from '../firebase';
import { Client } from '../objects/Client';
import { Administrator } from '../objects/Administrator';



//El componente UserProvider es una función de React que recibe un objeto de propiedades llamado children. 
//children representa los componentes hijos que se envolverán con el tema proporcionado por UserProvider.
export default function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


}
    //cada vez que el auth cambie pasara por aqui
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("Ha Iniciado Sesión.");
                console.log(user);

                //esta función convertirá el estado del user en el
                // objeto Client que acaba de Iniciar Sesión
                obtenerClient(user);
                obtenerAdministrator(user);
            } else {
                console.log("Se ha Cerrado la Sesión.");
                //el estado del user sera null
                setUser(user);
            }
        });
    }, []);
    
    return (
        <UserGlobal.Provider value = {{user,setUser} }>
            {children}
        </UserGlobal.Provider>
    );
