import { auth } from "config";
import { createMessageDocument } from "api/firestore/mutations/message";
import { DocumentID } from "types/custom";

interface SendMessagePayload {
  studyID: DocumentID;
  participantID: DocumentID;
  text: string;
}

export const sendMessage = async ({ studyID, participantID, text }: SendMessagePayload) => {
  if (auth.currentUser) {
    createMessageDocument(studyID, participantID, {
      text,
      user: auth.currentUser.uid,
      read: false,
    });
  }
};
