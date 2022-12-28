import React, { createContext, useEffect, useState } from 'react';
import app from '../config/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

const auth = getAuth(app)
export const authContext = createContext();
const UserContext = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInWithEmail = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    const updateUser = (userInfo) =>{
        return updateProfile(auth.currentUser, userInfo);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return ()=> unsubscribe();
    }, [])

    const authInfo = {
        signInWithEmail,
        createUser,
        logOut,
        updateUser,
        loading,
        user
    }
    return (
        <div>
            <authContext.provider value={authInfo}>
                {children}
            </authContext.provider>
        </div>
    );
};

export default UserContext;