import { useState } from "react";

export default function RegisterAdm() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit() {}

    return (
        <div>
            <label>
                Nombre: {' '}
                <input value={name} onChange={(e) => setName(e.target.value)}/>
            </label>
            <label>
                Contraseña: {' '}
                <input value={password} onChange={(e) => setPassword(e.target.value)}/>
            </label>
            <button onClick={handleSubmit}>Registrar</button>
        </div>


    )
}

