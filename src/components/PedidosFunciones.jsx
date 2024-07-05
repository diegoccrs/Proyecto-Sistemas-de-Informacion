import { getDoc, doc, setDoc, collection, updateDoc, documentId } from 'firebase/firestore';
import { useEffect, useRef, useState } from 'react'
import { firestoreDB } from '../firebase-config';

function PedidosFunciones() {

    /*              Funciones de Pedidos              */
    /*  Añadir y eliminar pedidos de Usuario.pedidos  */
    /*         NOTA:  Funciones en desarrollo         */

    // Parámetros de prueba //
    const platillo = {
        descripcion: "wiga",
        disponible: true,
        nombre: "wier",
        precio: 4,
        tipo: "maj"
    };

    const indexPlatillo = 1;
    // Parámetros de prueba //


    const addPedido = async () => {
        try {
            const docRef = doc(firestoreDB, "Usuario", localStorage.getItem("email"));
            const docu = await getDoc(docRef);
            const data = docu.data().pedidos;

            await updateDoc(docRef, {
                pedidos: [...data, /**/platillo/**/]
            });
        } catch (error) {
            console.log(error)
        }
    };

    const deletePedido = async () => {
        try {
            const docRef = doc(firestoreDB, "Usuario", localStorage.getItem("email"));
            const docu = await getDoc(docRef);
            const data = docu.data().pedidos;
            data.splice(/**/indexPlatillo/**/, 1);
            console.log(data);
            
            await updateDoc(docRef, {
                pedidos: [...data]
            });
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div>
            <button onClick={addPedido}>Añadir pedido</button>
            <button onClick={deletePedido}>Eliminar pedido</button>
        </div>
    )
}

export default PedidosFunciones