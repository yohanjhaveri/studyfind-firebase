// import firebase from "firebase";
// export const initialize = (config) => {
//   const app = firebase.initializeApp(config);
//   const auth = app.auth();
//   const storage = app.storage();
//   const firestore = app.firestore();
//   const functions = app.functions();
//   return { auth, storage, firestore, functions };
// };
export { default as useAuthentication } from "./hooks/useAuthentication";
export { default as usePagination } from "./hooks/usePagination";
export { default as useCollection } from "./hooks/useCollection";
export { default as useDocument } from "./hooks/useDocument";
export { default as useFirebase } from "./hooks/useFirebase";
export { FirebaseContext, FirebaseProvider } from "./context/FirebaseContext";