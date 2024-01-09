import firebase from "firebase";

import { auth } from "config";
import { updateParticipantDocument } from "api/firestore/mutations/participant";
import { createStudyParticipantDocument } from "api/firestore/mutations/studyParticipant";
import { DocumentID, Timezone } from "types/custom";
import { StudyQuestion } from "types/documents/study";
import { StudyParticipantReponse } from "types/documents/study-participant";

interface EnrollForStudyPayload {
  studyID: DocumentID;
  timezone: Timezone;
  availability: string;
  questions: StudyQuestion[];
  responses: StudyParticipantReponse[];
}

export const enrollForStudy = async ({
  studyID,
  timezone,
  availability,
  questions,
  responses,
}: EnrollForStudyPayload) => {
  if (auth.currentUser) {
    const participantID = auth.currentUser.uid;

    createStudyParticipantDocument(studyID, participantID, {
      status: "interested",
      timezone,
      availability,
      questions,
      responses,
    });

    updateParticipantDocument(participantID, {
      enrolled: firebase.firestore.FieldValue.arrayUnion(studyID),
    });
  }
};
