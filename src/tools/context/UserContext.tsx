import React from "react";
import firebase from "firebase";

import { useAuthState } from "react-firebase-hooks/auth";
import { createContext, useEffect, useState } from "react";

import { UserType } from "types/custom";
import { auth } from "config";

interface CustomUser {
  uid: string;
  name: string;
  email: string;
  verified: boolean;
}

interface CustomClaims {
  type?: UserType;
  stripeRole?: "FREE" | "STANDARD" | "PREMIUM";
}

interface RawClaims {
  [key: string]: any;
}

type User = (CustomUser & CustomClaims) | null | undefined;
type Loading = boolean | null;
type Error = firebase.auth.Error | null | undefined;

type Context = [User, Loading, Error];

interface Props {
  children: React.ReactNode;
}

export const UserContext = createContext<Context>([null, null, null]);

export const UserProvider = ({ children }: Props) => {
  const [firebaseUser, loading, error] = useAuthState(auth);
  const [customUser, setCustomUser] = useState<User>(null);
  const [fetchingClaims, setFetchingClaims] = useState(true);

  const parseUser = (firebaseUser: firebase.User): CustomUser => {
    return {
      uid: firebaseUser.uid,
      name: firebaseUser.displayName || "",
      email: firebaseUser.email || "",
      verified: firebaseUser.emailVerified,
    };
  };

  const getCustomClaims = async (firebaseUser: firebase.User) => {
    const decodedToken = await firebaseUser.getIdTokenResult(true);
    return decodedToken.claims;
  };

  const parseCustomClaims = ({ usertype, stripeRole }: RawClaims) => {
    return usertype === "PARTICIPANT"
      ? {
          type: usertype,
        }
      : {
          type: usertype,
          stripeRole: stripeRole || "FREE",
        };
  };

  const combineUserWithClaims = (user: CustomUser, claims: CustomClaims) => {
    return {
      ...user,
      ...claims,
    };
  };

  const handleInitial = () => {
    try {
      if (firebaseUser) {
        auth.onIdTokenChanged(async () => {
          setFetchingClaims(true);

          const claims = await getCustomClaims(firebaseUser);

          const parsedUser = parseUser(firebaseUser);
          const parsedClaims = parseCustomClaims(claims);

          const combined = combineUserWithClaims(parsedUser, parsedClaims);

          setCustomUser(combined);
          setFetchingClaims(false);
        });
      } else if (!loading) {
        setFetchingClaims(false);
      }
    } catch (error) {
      setFetchingClaims(false);
    }
  };

  useEffect(() => {
    handleInitial();
  }, [firebaseUser]);

  return <UserContext.Provider value={[customUser, loading || fetchingClaims, error]}>{children}</UserContext.Provider>;
};
