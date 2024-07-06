import { getDoc, doc, setDoc } from 'firebase/firestore';
import { useEffect, useRef, useState } from 'react'
import { firestoreDB } from '../firebase-config';
import { useNavigate } from 'react-router-dom';
import { v4 } from 'uuid';
import style from './Pyp.module.css';

export default function PayPal(props) {

    const paypal = useRef();
    const navigate = useNavigate();

    let pedidosClient = [];

    
    let total = 0;

    const pedidos = async () => {
        try {
            const docRef = doc(firestoreDB, "Usuario", localStorage.getItem("email"));
            const docu = await getDoc(docRef);
            const pedidos = docu.data().pedidos;
            
            pedidosClient = pedidos;
        
            const totalAmount = (value) => {
                total += value.precio;
            };
        
            pedidos.forEach(totalAmount);
    
            props.totalPago(total);
            props.platillosCliente(pedidosClient);
        } catch (error) {
            // console.log(error);
        }
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
                    pedidos: [],
                    imageRef: localStorage.getItem("imageRef")
                };
                await setDoc(docRef1, payload1);


                const docRef2 = doc(firestoreDB, "Pedidos", v4());
                const payload2 = { 
                    emailCliente: localStorage.getItem("email"),
                    pedidos: pedidosClient,
                    activo: true
                };
                await setDoc(docRef2, payload2);
                
                console.log("Successful order");
                navigate("/");
            },
            onError: (err) => {
                console.log(err);
                console.log("Error: Transaction failed");
            },
        })
        .render(paypal.current);
    }, []);

    return (
        <div className={style.margin}>
            <div className='payButtons' ref={paypal}></div>
        </div>
    )
}
