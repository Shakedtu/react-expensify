import { firebase } from "../firebase/firebase";
import { LOGIN, LOGOUT } from "./actionTypes";

export const login = (uid) => ({
    type: LOGIN,
    uid
});

export const logout = () => ({
    type: LOGOUT
});

export const startLogin = (Provider) => () =>
    (firebase.auth().signInWithPopup(Provider));

export const startLogout = () => () =>
    (firebase.auth().signOut());