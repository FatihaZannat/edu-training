import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2'
import { createContext, useEffect, useState } from "react";
import auth from '../firebase/firebase.config';
export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider

const Provider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loding , setLoding] = useState(true)

    // email password authenticatio
    const createEmailPass = (email, password) => {
        setLoding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // google authentication

    const createGoogleAuth = () => {
        setLoding(true)
        return signInWithPopup(auth, googleProvider)
    }
    // login
    const existingUserSignIn = (email, password) =>{
        setLoding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // logOut
        const logOutUser = () => {
            setLoding(true)
         return   signOut(auth)
        }
    // manage users
    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoding(false)
            console.log(currentUser);
        })
        return ()=>{
            unsubscribe()
        }
    }, [])

    // context value
    const contextValue = {
        Swal,
        user,
        loding,
        createEmailPass,
        createGoogleAuth,
        existingUserSignIn,
        logOutUser
    }
    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

Provider.propTypes = {
    children: PropTypes.node
}
export default Provider;