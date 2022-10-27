import app from "./firebaseconfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { Refresh } from "@mui/icons-material";

const auth = getAuth(app);
const database = getDatabase(app);
let signUpUser = (obj) => {
  let { email, password } = obj;
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const refrence = ref(database, `users/${user.uid}`);
        obj.id = user.uid
        set(refrence, obj)
          .then(() => {
            resolve("User Create Successfully ");
          })
          .catch((errr) => {
            reject(errr);
          });
      })
      .catch((err) => {
        reject(err);
      });
  });
};
let LoginUser = (obj) => {
  let { email, password } = obj;
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        const reference = ref(database, `users/${user.uid}`);
        onValue(reference, (e) => {
          let status = e.exists();
          console.log(e.exists());
          // if (status) {
            // resolve(e);
          // } 
          // else {
          //   reject("Data Not Found :(");
          // }
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        reject(errorMessage);
      });
  });
}
export { signUpUser, LoginUser };
