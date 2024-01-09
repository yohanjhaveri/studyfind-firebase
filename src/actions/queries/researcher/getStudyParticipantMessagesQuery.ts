import { getStudyParticipantMessagesReference } from "api//firestore/references";
import { DocumentID } from "types/custom";

export const getStudyParticipantMessagesQuery = (studyID: DocumentID, participantID: DocumentID) => {
  return getStudyParticipantMessagesReference(studyID, participantID);
};
