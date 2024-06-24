
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


    //dado un user, este metodo busca el client en la base de datos, lo convierte en un objeto client
    // y cambia el estado del user.
    async function obtenerClient(user){
        try{
            const docRef = doc(db, "clientes", user.uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const data = docSnap.data();
                // Accede a los campos del documento utilizando la sintaxis data.<nombre_del_campo>
                const client = new Client(data.name, data.lastname, data.number, data.email, data.career, data.picture);
                setUser(client);
            }
        }catch (e){
            console.error(e,"Error en la función obtenerClient");
        }
    }
}

    async function obtenerAdministrator(user){
        try{
            const docRef = doc(db, "administradores", user.uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const data = docSnap.data();

                // Accede a los campos del documento utilizando la sintaxis data.<nombre_del_campo>
                const admi = new Administrator(data.name,data.email,data.number,data.picture);
                setUser(admi);
            }
        }catch (e){
            console.error(e,"Error en la función obtenerAdministrator");
        }
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
        <UserGlobal.Provider value = {{ user,setUser}}>
            {children}
        </UserGlobal.Provider>
    );
}

