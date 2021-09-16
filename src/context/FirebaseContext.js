import { createContext } from "react";
import { Participant, Researcher } from "mutations";

export const FirebaseContext = createContext(null);

export const FirebaseProvider = ({ children, app }) => {
  const auth = app.auth();
  const storage = app.storage();
  const firestore = app.firestore();
  const functions = app.functions();

  const getUID = () => {
    return auth.currentUser?.uid;
  };

  const getName = () => {
    return auth.currentUser?.displayName;
  };

  const getEmail = () => {
    return auth.currentUser?.email;
  };

  const getType = async () => {
    // await auth.currentUser?.getIdToken(true);
    // const decodedToken = await auth.currentUser?.getIdTokenResult();
    // return decodedToken.claims.usertype;
    return "researcher";
  };

  const getPlan = async () => {
    await auth.currentUser?.getIdToken(true);
    const decodedToken = await auth.currentUser?.getIdTokenResult();
    return decodedToken.claims.plan;
  };

  // AUTH
  const mutator = (uid) => {
    const type = getType();

    return {
      participant: Participant(firestore.collection("participants").doc(uid)),
      researcher: Researcher(firestore.collection("researchers").doc(uid)),
    }[type];
  };

  const setLocalUserExists = (value) => {
    localStorage.setItem("exists", value);
  };

  const getLocalUserExists = () => {
    localStorage.getItem("exists");
  };

  const initialize = async ({ email, password }) => {
    const { user } = await auth.createUserWithEmailAndPassword(email, password);
    return user;
  };

  const signup = async ({ name, email, password }) => {
    const user = await initialize({ email, password });

    await Promise.all([
      user.sendEmailVerification(),
      user.updateProfile({ displayName: name }),
      mutator(user.uid).create(),
    ]);

    setLocalUserExists(true);
  };

  const authenticate = async ({ email, password }) => {
    const { user } = await auth.signInWithEmailAndPassword(email, password);
    return user;
  };

  const login = async ({ email, password }) => {
    await authenticate({ email, password });
    setLocalUserExists(true);
  };

  const signout = async () => {
    return auth.signOut();
  };

  const forgotPassword = async ({ email }) => {
    await auth.sendPasswordResetEmail(email);
  };

  const changePassword = async ({ password, newPassword }) => {
    const email = getEmail();
    const user = await authenticate({ email, password });
    await user.updatePassword(newPassword);
  };

  const deleteAccount = async ({ email, password }) => {
    const user = await authenticate({ email, password });
    await mutator(user.uid).delete();
    await user.delete();
    setLocalUserExists(false);
  };

  return (
    <FirebaseContext.Provider
      value={{
        auth,
        storage,
        firestore,
        functions,
        getUID,
        getName,
        getEmail,
        getType,
        getPlan,
        signup,
        login,
        signout,
        forgotPassword,
        changePassword,
        deleteAccount,
        setLocalUserExists,
        getLocalUserExists,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
