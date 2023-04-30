/*import { collection, getDocs } from "firebase/firestore"; 

const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});
*/

const firebaseConfig = {
    apiKey: "AIzaSyAy7wlI8LTr5v65dM3UitD2_GbglTmUK7c",
    authDomain: "tkmp-e35d7.firebaseapp.com",
    projectId: "tkmp-e35d7",
    storageBucket: "tkmp-e35d7.appspot.com",
    messagingSenderId: "1009502746156",
    appId: "1:1009502746156:web:a2062ab2e4e1e39bf58389",
    measurementId: "G-4Q33QJQRS1"
  };

  firebase.initializeApp(firebaseConfig);