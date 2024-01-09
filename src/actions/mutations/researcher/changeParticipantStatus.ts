import { auth } from "config";
import { updateStudyParticipantDocument } from "api/firestore/mutations/studyParticipant";
import { DocumentID } from "types/custom";
import { StudyParticipantStatus } from "types/documents/study-participant";

interface ChangeParticipantStatusPayload {
  studyID: DocumentID;
  participantID: DocumentID;
  status: StudyParticipantStatus;
}

export const changeParticipantStatus = async ({ studyID, participantID, status }: ChangeParticipantStatusPayload) => {
  if (auth.currentUser) {
    updateStudyParticipantDocument(studyID, participantID, {
      status,
    });
  }
};
