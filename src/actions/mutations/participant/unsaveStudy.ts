import firebase from "firebase";

import { auth } from "config";
import { updateParticipantDocument } from "api/firestore/mutations/participant";
import { DocumentID } from "types/custom";

interface UnsaveStudyPayload {
  studyID: DocumentID;
}

export const unsaveStudy = async ({ studyID }: UnsaveStudyPayload) => {
  if (auth.currentUser) {
    const participantID = auth.currentUser.uid;

    updateParticipantDocument(participantID, {
      saved: firebase.firestore.FieldValue.arrayRemove(studyID),
    });
  }
};
