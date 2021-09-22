import Swal from 'sweetalert2';
import { types } from '../types';
import { finishLoading, setError, startLoading } from './ui';
import { noteLogout } from './notes';
import { firebase, googleAuthProvider } from '../../firebase/firebaseConfig';

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        dispatch(startLoading());
        try {
            return firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then(({ user }) => {
                    dispatch(login(user.uid, user.displayName));
                    dispatch(finishLoading());
                })
                .catch((e) => {
                    dispatch(finishLoading());
                    Swal.fire({
                        title: 'Error',
                        text: e.message,
                        icon: 'error',
                    });
                });
        } catch (e) {
            console.log(e);
        }
    };
};

export const startRegisterEmailPasswordName = (email, password, name) => {
    return async (dispatch) => {
        try {
            await firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then(async ({ user }) => {
                    await user.updateProfile({
                        displayName: name,
                    });

                    dispatch(login(user.uid, user.displayName));
                })
                .catch(({ message }) => {
                    Swal.fire({ title: 'Error', text: message, icon: 'error' });
                    dispatch(setError(message));
                });
        } catch (e) {
            console.log(e);
        }
    };
};

export const startGoogleLogin = () => {
    return async (dispatch) => {
       
            await firebase
                .auth()
                .signInWithPopup(googleAuthProvider)
                .then(({ user }) => {
                    dispatch(login(user.uid, user.displayName));
                })
                .catch((error) => {
                    console.log(error);
                });
         
    };
};

export const login = (uid, displayName) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName,
        },
    };
};

export const startLogout = () => {
    return (dispatch) => {
        firebase.auth().signOut();

        dispatch(logout());
        dispatch(noteLogout());
    };
};

export const logout = () => ({
    type: types.logout,
});
