import {EmailAuthCredential, EmailAuthProvider, createUserWithEmailAndPassword, fetchSignInMethodsForEmail, getAdditionalUserInfo, onAuthStateChanged, sendEmailVerification, signInAnonymously, signInWithCredential, signInWithEmailAndPassword, signInWithPopup, signOut, verifyBeforeUpdateEmail} from "firebase/auth";
import {auth,googleProvider,facebookProvider} from "../firebase";
import { setDoc, doc,getDoc } from "firebase/firestore";
import { db } from '../firebase';
import { Client } from "../objects/Client";
import { updateEmail,updateProfile,sendPasswordResetEmail } from "firebase/auth";

export async function login(email, password){
    try{
        await signInWithEmailAndPassword(auth,email,password);
        
    }catch (e){
        console.error(e);
        alert("Valores inválidos");
    }
}

export async function registerClient(name, lastname, number, email, faculty,password){
    try{
      const {user} = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const id = auth.currentUser.uid;
      const docRef = doc(db, "clients", id);
      const data = {
          email: email,
          name: name,
          lastname: lastname,
          number: number,
          faculty: faculty,
          picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3gkd0qUkv1F9epnQv4Wv0cgvrsGkJ7pETR3VEbPF1ne6SGhhkYXybBInQ5CGShqmPtyE&usqp=CAU",
        
      };
      await setDoc(docRef, data, { merge: true });
        return user;
    }catch (e){
        console.error(e);
        alert("Error, Es posible que el correo ya este en uso");
        return null;
    }
  }

export async function ingresarGoogleClient(){
try{
    const result = await signInWithPopup(auth,googleProvider);
    const aditionalInfo = getAdditionalUserInfo(result);
    const id = auth.currentUser.uid;
    if(aditionalInfo.isNewUser){
        const docRef = doc(db, "clients", id);
        const data = {
        email:result.user.email,
        name: result.user.displayName,
        number: result.user.phoneNumber,
        picture: result.user.photoURL ? result.user.photoURL : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3gkd0qUkv1F9epnQv4Wv0cgvrsGkJ7pETR3VEbPF1ne6SGhhkYXybBInQ5CGShqmPtyE&usqp=CAU',  
        };
        await setDoc(docRef, data, { merge: true });
        return true;
    }
    return result.user;
    
}catch (e){
    console.error(e);
}
}

export async function logOut(){
    await signOut(auth);
  }

export async function modificarClient(user_modificado){
    try {
      const id = auth.currentUser.uid;
      const docRef = doc(db, "clients", id);
  
      await setDoc(docRef, user_modificado, { merge: true });
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  }

  export async function ingresarFacebookClient(){
    try{
      const result = await signInWithPopup(auth,facebookProvider);
      const aditionalInfo = getAdditionalUserInfo(result);
      const id = auth.currentUser.uid;
      if(aditionalInfo.isNewUser){
          const docRef = doc(db, "clients", id);
          const data = {
          email:result.user.email,
          name: result.user.displayName,
          number: result.user.phoneNumber,
          picture: result.user.photoURL ? result.user.photoURL : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3gkd0qUkv1F9epnQv4Wv0cgvrsGkJ7pETR3VEbPF1ne6SGhhkYXybBInQ5CGShqmPtyE&usqp=CAU', 
          };
          await setDoc(docRef, data, { merge: true });
          return true;
      }
      return result.user;
      
    }catch (e){
      console.error(e);
      alert(e);
    }
  }