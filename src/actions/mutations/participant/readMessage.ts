import { auth } from "config";
import { updateMessageDocument } from "api/firestore/mutations/message";
import { DocumentID } from "types/custom";

interface ReadMessagePayload {
  studyID: DocumentID;
  messageID: DocumentID;
}

export const readMessage = async ({ studyID, messageID }: ReadMessagePayload) => {
  if (auth.currentUser) {
    const participantID = auth.currentUser.uid;

    updateMessageDocument(studyID, participantID, messageID, {
      read: true,
    });
  }
};
