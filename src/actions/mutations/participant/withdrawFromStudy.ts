import firebase from "firebase";

import { auth } from "config";

import { updateParticipantDocument } from "api/firestore/mutations/participant";
import { deleteStudyParticipantDocument } from "api/firestore/mutations/studyParticipant";
import { DocumentID } from "types/custom";

interface WithdrawPayload {
  studyID: DocumentID;
}

export const withdrawFromStudy = async ({ studyID }: WithdrawPayload) => {
  if (auth.currentUser) {
    const participantID = auth.currentUser.uid;

    deleteStudyParticipantDocument(participantID, studyID);
    updateParticipantDocument(participantID, {
      enrolled: firebase.firestore.FieldValue.arrayRemove(studyID),
    });
  }
};
