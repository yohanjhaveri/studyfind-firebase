interface InputErrors {
  email?: string;
  password?: string;
  newPassword?: string;
}

interface FirebaseAuthErrors {
  [key: string]: InputErrors;
}

export const firebaseAuthErrors: FirebaseAuthErrors = {
  // COMMON
  "api/auth/invalid-email": { email: "Email is invalid" },

  // SIGNUP
  "api/auth/email-already-in-use": { email: "Email already exists" },
  "api/auth/operation-not-allowed": { email: "This operation is not allowed" },
  "api/auth/weak-password": { password: "Password is too weak" },

  // SIGNIN
  "api/auth/user-disabled": { email: "Your account has been disabled" },
  "api/auth/user-not-found": { email: "Email does not exist" },
  "api/auth/user-not-verified": { email: "Email is not verified" },
  "api/auth/too-many-requests": { password: "Too many unsuccessful attempts" },
  "api/auth/wrong-password": { password: "Password is incorrect" },
  "api/auth/argument-error": { password: "Incorrect function arguments" },
};
