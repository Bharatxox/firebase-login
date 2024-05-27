import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithPopup,
  updatePassword,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase";

export const doCreateUserWithEmailAndPassword = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const doSignInwiwthEmailAndPassword = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const doSignWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  return result;
};
export const doSignOut = () => {
  return auth.signOut();
};

// export const doPasswordReset = async (email) => {
//   return sendPasswordResetEmail(auth, email);
// };

// export const doPasswordChange = async (password) => {
//     return updatePassword(auth.currentUser, password);
// }

// export const doSendEmailVerfication = async () => {
//     return sendEmailVerification(auth.currentUser , {
//         url: `${window.location.origin}/home`,
//     });
// }
