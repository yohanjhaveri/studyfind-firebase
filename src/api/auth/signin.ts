import { auth } from "config";
import { setDoesUserExist } from "api/auth/utils";

interface SignInPayload {
  email: string;
  password: string;
}

export const signin = async ({ email, password }: SignInPayload) => {
  await auth.signInWithEmailAndPassword(email, password);
  setDoesUserExist("Yes");
};
