import app from "./firebaseconfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
} from "firebase/auth";
import { getDatabase, ref, set, onValue, push } from "firebase/database";

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
          console.log(status);
          if (status) {
            resolve(e.val());
          } else {
            reject("Data Not Found :(");
          }
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        reject(errorMessage);
      });
  });
};
let checkUser = () => {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        resolve(uid)
        // ...
      } else {
        reject('no User Login')
      }
    });
  });
};

let sendData = (obj, node, id) => {
  let postListRef;
  return new Promise((resolve, reject) => {
    if (id) {
      postListRef = ref(database, `${node}/${id}`);
    } else {
      let addRef = ref(database, node);
      obj.id = push(addRef).key;
      postListRef = ref(database, `${node}/${obj.id}`);
    }
    set(postListRef, obj)
      .then((res) => {
        resolve(`Data send to this node ${node}/${obj.id} successfully.`);
      })
      .catch((err) => {
        reject("Failed to end data");
      });
  });
};

let getData = (node, userId) => {
    let dbReference = ref(database, `${node}/${userId ? userId : ""}`);
    return new Promise((resolve, reject) => {
      onValue(
        dbReference,
        (data) => {
          if (data.exists()) {
            let userData = data.val();
            if (userId) {
              // return
              resolve(userData);
            } else {
              let dataArr = Object.values(userData);
              resolve(dataArr);
            }
          } else {
            reject("Data not found");
          }
        },
        {
          onlyOnce: false,
        }
      );
    });
  };
  let Signout = () => {
    return new Promise((resolve, reject) => {
      signOut(auth)
        .then(() => {
          resolve("user loggedout");
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  let sendResetPwdEmail = (email) => {
    sendPasswordResetEmail (auth, email)
      .then(() => {
        // Password reset email sent!
        alert("Verification Email sent!");
        // ..
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`${errorMessage} ${errorCode}`);
        // ..
      });
  };
  let deleteData = (node, listId) => {
    if (!listId) {
      let dbReference = ref(database, `${node}`);
      return new Promise((resolve, reject) => {
        set(dbReference, null)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    } else {
      let dbReference = ref(database, `${node}/${listId}`);
      return new Promise((resolve, reject) => {
        set(dbReference, null)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    }
  }

  //Sign Up user with Email and Password
// const signUpUser = ({ name, email, password, category}) => {

//   return new Promise((resolve, reject) => {
//     createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         // User Successfully Registered
//         const user = userCredential.user;
//         const userId = user.uid;
//         //Sending data in database
//         set(ref(db, 'users/' + userId), {
//           username: name,
//           email: email,
//           uid: userId,
//           category: category,
//         })
//           .then(() => { resolve("User Created Successfuly and data is also sent in database") })
//           .catch(() => { reject('User created but data is not added in database') });
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         reject(errorMessage);
//       })
//   })
// }
export { Signout,signUpUser, LoginUser ,getData,sendData,checkUser,deleteData,sendResetPwdEmail,database};
