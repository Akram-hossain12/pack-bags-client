import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../../firebase/firebase.config';


export const AuthContext =createContext();
const auth = getAuth(app)


const AuthProvider = ({children}) => {
    
const [user ,setUser]=useState(null);
const [loading,setLoading]=useState(null)




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

}

    return (
        <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;