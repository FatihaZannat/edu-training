import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2'
import { createContext, useEffect, useState } from "react";
import auth from '../firebase/firebase.config';
export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider

const Provider = ({ children }) => {
    const [user, setUser] = useState(null)

    // email password authenticatio
    const createEmailPass = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // google authentication

    const createGoogleAuth = () => {
        return signInWithPopup(auth, googleProvider)
    }
    // login
    const existingUserSignIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    // logOut
        const logOutUser = () => {
         return   signOut(auth)
        }
    // manage users
    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
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