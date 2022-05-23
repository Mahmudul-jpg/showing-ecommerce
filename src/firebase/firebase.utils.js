import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCNsrltxViSltEHHAmdmItJa70_2jwTfy4",
    authDomain: "ecommerce-20105.firebaseapp.com",
    projectId: "ecommerce-20105",
    storageBucket: "ecommerce-20105.appspot.com",
    messagingSenderId: "897223212648",
    appId: "1:897223212648:web:44ac55f12243cedcd645dd",
    measurementId: "G-6HMHBSSV9R"
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;