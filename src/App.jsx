import { useState, useEffect } from 'react';
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth'
/////////////////////////////////////////////////////////////////////////////////
import { auth, firestoreDB } from './firebase-config.js'
import { collection, getDoc, addDoc } from 'firebase/firestore'
/////////////////////////////////////////////////////////////////////////////////
import './App.css'

function App() {

    const [regEmail, setRegEmail] = useState('');
    const [regPassword, setRegPassword] = useState('');
    const [logEmail, setLogEmail] = useState('');
    const [logPassword, setLogPassword] = useState('');

    const [user, setUser] = useState({});

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
    }, []);

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                regEmail,
                regPassword);
/////////////////////////////////////////////////////////////////////////////////

                await addDoc(collection(firestoreDB, "Usuario"), {
                    email: regEmail,
                    password: regPassword,
                });

/////////////////////////////////////////////////////////////////////////////////
                console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    };

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                logEmail,
                logPassword);

            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    };

    const logout = async () => {

        await signOut(auth);
    };

    return (
    <>
        <div className='App'>
            <h1>DELI PERNIL</h1>


            <h3>Sign Up</h3>
            <input type="email" placeholder='e-mail' onChange={(event) => {
                setRegEmail(event.target.value)
            }} />
            <br />
            <input type="password" placeholder='password' onChange={(event) => {
                setRegPassword(event.target.value)
            }} />
            <br />
            <br />
            <button onClick={register}>Sign Up</button>


            <br /><br /><br /><br />


            <h3>Sign In</h3>
            <input type="email" placeholder='e-mail' onChange={(event) => {
                setLogEmail(event.target.value)
            }} />
            <br />
            <input type="password" placeholder='password' onChange={(event) => {
                setLogPassword(event.target.value)
            }} />
            <br />
            <br />
            <button onClick={login}>Sign In</button>


            <br /><br /><br /><br />


            <h3>User Logged In: {user?.email || 'None'}</h3>

            <button onClick={logout}>Sign Out</button>
        </div>
    </>
    )
}

export default App
