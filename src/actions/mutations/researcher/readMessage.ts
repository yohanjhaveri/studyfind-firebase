import { auth } from "config";
import { updateMessageDocument } from "api/firestore/mutations/message";
import { DocumentID } from "types/custom";

interface ReadMessagePayload {
  studyID: DocumentID;
  participantID: DocumentID;
  messageID: DocumentID;
}

export const readMessage = async ({ studyID, participantID, messageID }: ReadMessagePayload) => {
  if (auth.currentUser) {
    updateMessageDocument(studyID, participantID, messageID, { read: true });
  }
};
