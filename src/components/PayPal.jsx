import React, { useEffect, useRef } from 'react'

export default function PayPal() {

    const paypal = useRef();

    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: "Cool Table",
                            amount: {
                                currency_code: "USD",
                                value: 300.00
                            }
                        }
                    ]
                })
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture();
                console.log(order);
                console.log("Successful order")
            },
            onError: (err) => {
                console.log(err);
                console.log("Error: Transaction failed")
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
