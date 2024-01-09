import React from "react";
import firebase from "firebase";

import { auth, firestore } from "config";
import { createContext } from "react";
import { useDocumentData } from "react-firebase-hooks/firestore";

import { ResearcherDocumentStructure } from "types/documents/researcher";

interface Props {
  children: React.ReactNode;
}

type Context = [
  ResearcherDocumentStructure | undefined | null,
  boolean | null,
  firebase.FirebaseError | undefined | null
];

export const ResearcherContext = createContext<Context>([null, null, null]);

export const ResearcherProvider = ({ children }: Props) => {
  const [researcher, loading, error] = useDocumentData<ResearcherDocumentStructure>(
    firestore.collection("researchers").doc(auth.currentUser?.uid || "")
  );

  return <ResearcherContext.Provider value={[researcher, loading, error]}>{children}</ResearcherContext.Provider>;
};
