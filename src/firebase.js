import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
} from "firebase/auth";
import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
} from "firebase/firestore";
// import { getDatabase, onValue, ref, where } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCuuH5mj3Sdhl0Qz_G1KhEry5oQ39amnjg",
    authDomain: "malangrent-ab0ee.firebaseapp.com",
    projectId: "malangrent-ab0ee",
    storageBucket: "malangrent-ab0ee.appspot.com",
    messagingSenderId: "533873122120",
    appId: "1:533873122120:web:55098cbbc905ba2ca3f17d",
    measurementId: "G-MPD4GQ9WCD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
// const db = getDatabase(app);

const googleProvider = new GoogleAuthProvider();

//w/ Firestore
const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email,
            });
        }
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const registerWithEmailAndPassword = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const sendPasswordReset = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        alert("Password reset link sent!");
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const logout = () => {
    signOut(auth);
};

//w/ Realtime Database
// const signInWithGoogle = async () => {
//   try {
//       const res = await signInWithPopup(auth, googleProvider);
//       const user = res.user;
//       const q = query(ref(db, "users"), where("uid", "==", user.uid));
//       const docs = await getDocs(q);
//       if (docs.docs.length === 0) {
//           await addDoc(collection(db, "users"), {
//               uid: user.uid,
//               name: user.displayName,
//               authProvider: "google",
//               email: user.email,
//           });
//       }
//   } catch (err) {
//       console.error(err);
//       alert(err.message);
//   }
// };

// const logInWithEmailAndPassword = async (email, password) => {
//   try {
//       await signInWithEmailAndPassword(auth, email, password);
//   } catch (err) {
//       console.error(err);
//       alert(err.message);
//   }
// };

// const registerWithEmailAndPassword = async (name, email, password) => {
//   try {
//       const res = await createUserWithEmailAndPassword(auth, email, password);
//       const user = res.user;
//       await addDoc(collection(db, "users"), {
//           uid: user.uid,
//           name,
//           authProvider: "local",
//           email,
//       });
//   } catch (err) {
//       console.error(err);
//       alert(err.message);
//   }
// };

// const sendPasswordReset = async (email) => {
//   try {
//       await sendPasswordResetEmail(auth, email);
//       alert("Password reset link sent!");
//   } catch (err) {
//       console.error(err);
//       alert(err.message);
//   }
// };

// const logout = () => {
//   signOut(auth);
// };

export {
    auth,
    db,
    signInWithGoogle,
    logInWithEmailAndPassword,
    signInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
};
