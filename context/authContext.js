import { createContext, useState } from 'react';
import { useRouter } from 'next/router';
import {
    getAuth,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    FacebookAuthProvider,
    signOut,
} from 'firebase/auth';
import app from '../firebase/firebase';
export const AuthContext = createContext();

export function AuthContextWrapper({ children }) {
    const router = useRouter();
    const auth = getAuth();
    const google = new GoogleAuthProvider();
    const facebook = new FacebookAuthProvider();
    const [isLogin, setIsLogin] = useState(false);
    const [user, setUser] = useState();

    const login = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential.user);
                setIsLogin(true);
                setUser('Tito');
                router.push('/');
            })
            .catch((error) => {
                alert('Email or Password wrong, please try again!');
                router.push('/login');
                console.log('error code: ' + error.code);
                console.log('error message: ' + error.message);
            });
    };

    const googleSSO = () => {
        return signInWithPopup(auth, google)
            .then((result) => {
                console.log(result.user.displayName);
                setIsLogin(true);
                setUser(result.user.displayName);
                router.push('/');
            })
            .catch((error) => {
                // Handle Errors here.
                console.log(error.code);
                console.log(error.message);
                // The email of the user's account used.
                console.log(error.email);
                // The AuthCredential type that was used.
                console.log(GoogleAuthProvider.credentialFromError(error));
            });
    };

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setIsLogin(false);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const facebookSSO = () => {
        return signInWithPopup(auth, facebook)
            .then((result) => {
                // The signed-in user info.
                console.log(result.user);
                setIsLogin(true);
                router.push('/');
            })
            .catch((error) => {
                // Handle Errors here.
                console.log(error.code);
                console.log(error.message);
                // The email of the user's account used.
                console.log(error.email);
                // The AuthCredential type that was used.
                console.log(FacebookAuthProvider.credentialFromError(error));
            });
    };
    return (
        <AuthContext.Provider
            value={{
                isLogin,
                login,
                googleSSO,
                facebookSSO,
                user,
                logOut,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
