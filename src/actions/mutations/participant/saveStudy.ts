import firebase from "firebase";

import { auth } from "config";
import { updateParticipantDocument } from "api/firestore/mutations/participant";
import { DocumentID } from "types/custom";

interface SaveStudyPayload {
  studyID: DocumentID;
}

export const saveStudy = async ({ studyID }: SaveStudyPayload) => {
  if (auth.currentUser) {
    const participantID = auth.currentUser.uid;

    updateParticipantDocument(participantID, {
      saved: firebase.firestore.FieldValue.arrayUnion(studyID),
    });
  }
};
