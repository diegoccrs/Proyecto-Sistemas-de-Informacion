import { getDoc, doc, setDoc } from 'firebase/firestore';
import { useEffect, useRef, useState } from 'react'
import { firestoreDB } from '../firebase-config';

export default function PayPal() {

    const paypal = useRef();

    let pedidosClient = [];

    
    let total = 0;

    const pedidos = async () => {
        const docRef = doc(firestoreDB, "Usuario", localStorage.getItem("email"));
        const docu = await getDoc(docRef);
        const pedidos = docu.data().pedidos;
        
        pedidosClient = pedidos;
    
        const totalAmount = (value) => {
            total += value.precio;
        };
    
        pedidos.forEach(totalAmount);
    };


    useEffect(() => {
        pedidos();
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: "Compra",
                            amount: {
                                currency_code: "USD",
                                value: total
                            }
                        },
                    ]
                })
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture();
                console.log(order);

                const docRef1 = doc(firestoreDB, "Usuario", localStorage.getItem("email"));
                const payload1 = { 
                    nombreCompleto: localStorage.getItem("nombreCompleto"),
                    email: localStorage.getItem("email"),
                    facultad: localStorage.getItem("facultad"),
                    telefono: localStorage.getItem("telefono"),
                    admin: localStorage.getItem("admin"),
                    pedidos: [{}],
                };
                await setDoc(docRef1, payload1);


                const docRef2 = doc(firestoreDB, "Pedidos");
                const payload2 = { 
                    emailCliente: localStorage.getItem("email"),
                    pedidos: pedidosClient,
                    activo: true,
                };
                await setDoc(docRef2, payload2);


                pedidosClient = [];
                
                console.log("Successful order");
            },
            onError: (err) => {
                console.log(err);
                console.log("Error: Transaction failed");
            },
        })
        .render(paypal.current);
    }, []);

    return (
        <div>
            <div className='payButtons' ref={paypal}></div>
        </div>
    )
}
