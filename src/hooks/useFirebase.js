import { useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, GithubAuthProvider, FacebookAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";


const useFirebase = () => {
    initializeAuthentication();
    const [user, setUser] = useState(null);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const registerWithEmailPass = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass)
    }

    const setUserName = name => updateProfile(auth.currentUser, {
        displayName: name, photoURL: "https://www.seekpng.com/png/full/114-1149972_avatar-free-png-image-avatar-png.png"
    }).then(() => {
        console.log('profile updated!');
    })

    const loginWithEmailPass = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const loginWithFacebook = () => {
        return signInWithPopup(auth, facebookProvider)
    }

    const signInUsingGithub = () => {
        return signInWithPopup(auth, githubProvider)
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {

            })
    }

    onAuthStateChanged(auth, user => {
        if (user) {
            setUser(user);
        }
        else {
            setUser(null);
        }
    })

    return {
        user, setUser, registerWithEmailPass, setUserName, loginWithEmailPass, signInUsingGoogle, loginWithFacebook, signInUsingGithub, logOut
    }
}
export default useFirebase;