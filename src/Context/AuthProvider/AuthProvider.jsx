import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../../firebase/firebase.config';


export const AuthContext =createContext();
const auth = getAuth(app)

const provider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    
const [user ,setUser]=useState(null);
const [loading,setLoading]=useState(false)

const sginupAuth=(email,password)=>{
 setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}
const googleAuth=()=>{
    setLoading(true)
    return signInWithPopup(auth,provider)
}

const loginAuth=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

const logoutAuth=()=>{
    setLoading(true)
    return signOut(auth)
}


useEffect( () =>{
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
        console.log(currentUser);
        setUser(currentUser);
        setLoading(false);
    });

    return () =>{
        return unsubscribe();
    }
}, [])

const authInfo={
  loading,
    user,
    logoutAuth,
    loginAuth,
    sginupAuth,
    googleAuth
}

    return (
        <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;