import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const providerLogin = (provider)=>{
        return signInWithPopup(auth, provider);
    }

    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn= (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile= (profile)=>{
        return updateProfile(auth.currentUser, profile);
    }
    const verifyEmail = ()=>{
        return sendEmailVerification(auth.currentUser);
    }

    const logOut =()=>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth, (currentUser)=>{
            console.log('user inside state change', currentUser);
            if(currentUser === null || currentUser.emailVerified){
                setUser(currentUser);
            }
            
        });
        return ()=>{
            unsubscribe();
        }

    }, [])

    const authInfo ={user,updateUserProfile, providerLogin,signIn, logOut,createUser,verifyEmail};
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;