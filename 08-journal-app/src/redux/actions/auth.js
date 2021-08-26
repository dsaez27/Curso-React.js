
import Swal from 'sweetalert2'
import { types } from '../types';
import { firebase, googleAuthProvider } from '../../firebase/firebaseConfig';
import { finishLoading, setError, startLoading } from './ui';

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        dispatch(startLoading());
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName));
                dispatch(finishLoading());
               
            })
            .catch((e) => {
                dispatch(finishLoading());
                Swal.fire({title: 'Error', text: e.message, icon: 'error'});
            });
    };
};

export const startRegisterEmailPasswordName = (email, password, name) => {
    return (dispatch) => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(async ({ user }) => {
                await user.updateProfile({
                    displayName: name,
                });
              
                dispatch(login(user.uid, user.displayName));
            })
            .catch(({ message }) => {
                Swal.fire({title: 'Error', text: message, icon: 'error'});
                dispatch(setError(message));
            });
    };
};

export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase
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
    return async (dispatch) => {
        await firebase.auth().signOut();

        dispatch(logout());
    };
};

export const logout = () => ({
    type: types.logout,
});
