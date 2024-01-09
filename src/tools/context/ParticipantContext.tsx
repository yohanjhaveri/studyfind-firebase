import React from "react";
import firebase from "firebase";

import { auth, firestore } from "config";
import { createContext } from "react";
import { useDocumentData } from "react-firebase-hooks/firestore";

import { ParticipantDocumentStructure } from "types/documents/participant";

interface Props {
  children: React.ReactNode;
}

type Context = [
  ParticipantDocumentStructure | undefined | null,
  boolean | null,
  firebase.FirebaseError | undefined | null
];

export const ParticipantContext = createContext<Context>([null, null, null]);

export const ParticipantProvider = ({ children }: Props) => {
  const [participant, loading, error] = useDocumentData<ParticipantDocumentStructure>(
    firestore.collection("participants").doc(auth.currentUser?.uid || "")
  );

  return <ParticipantContext.Provider value={[participant, loading, error]}>{children}</ParticipantContext.Provider>;
};
