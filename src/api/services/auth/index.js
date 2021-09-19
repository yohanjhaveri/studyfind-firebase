import { auth, side } from "config";

// const mutator = {
//   participant,
//   researcher,
// }[side];

const mutator = () => {};

const getUserID = async () => {
  return auth.currentUser?.uid;
};

const getUserName = async () => {
  return auth.currentUser?.displayName;
};

const getUserEmail = async () => {
  return auth.currentUser?.email;
};

const getUserCustomClaims = async () => {
  // reset refreshToken for user on frontend
  await auth.currentUser?.getIdToken(true);
  const decodedToken = auth.currentUser?.getIdTokenResult();
  return decodedToken.claims;
};

const getUserType = async () => {
  const { usertype } = await getUserCustomClaims();
  return usertype;
  // return "researcher";
};

const getUserPlan = async () => {
  const { userplan } = await getUserCustomClaims();
  return userplan;
};

// AUTH
const setUserExists = (value) => {
  localStorage.setItem("exists", value);
};

const getUserExists = () => {
  localStorage.getItem("exists");
};

const createUser = async ({ email, password }) => {
  const { user } = await auth.createUserWithEmailAndPassword(email, password);
  return user;
};

const signup = async ({ name, email, password }) => {
  const user = await createUser({ email, password });

  await Promise.all([
    user.sendEmailVerification(),
    user.updateProfile({ displayName: name }),
    mutator(user.uid).create(),
  ]);

  setUserExists(true);
};

const authenticateUser = async ({ email, password }) => {
  const { user } = await auth.signInWithEmailAndPassword(email, password);
  return user;
};

const signin = async ({ email, password }) => {
  await authenticateUser({ email, password });
  setUserExists(true);
};

const signout = async () => {
  return auth.signOut();
};

const forgotPassword = async ({ email }) => {
  await auth.sendPasswordResetEmail(email);
};

const changePassword = async ({ password, newPassword }) => {
  const email = await getUserEmail();
  const user = await authenticateUser({ email, password });
  await user.updatePassword(newPassword);
};

const deleteAccount = async ({ email, password }) => {
  const user = await authenticateUser({ email, password });
  await mutator(user.uid).delete();
  await user.delete();
  setUserExists(false);
};

export const authenticate = {
  getUserID,
  getUserName,
  getUserEmail,
  getUserType,
  getUserPlan,
  getUserExists,

  signup,
  signin,
  signout,

  forgotPassword,
  changePassword,
  deleteAccount,
};
