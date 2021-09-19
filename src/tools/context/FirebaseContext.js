import { createContext } from "react";

import { Authenticate } from "api/services/auth";
import { Mutate, Query } from "api";
import { Store } from "api/services/storage";

export const FirebaseContext = createContext(null);

export const FirebaseProvider = ({ children, app, side }) => {
  const auth = app.auth();
  const storage = app.storage();
  const firestore = app.firestore();
  // const functions = app.functions();

  const authenticate = new Authenticate(side, auth, firestore);
  const mutate = new Mutate(side, auth, firestore);
  const query = new Query(side, auth, firestore);
  const store = new Store(side, storage);

  return (
    <FirebaseContext.Provider value={{ authenticate, mutate, query, store }}>
      {children}
    </FirebaseContext.Provider>
  );
};
