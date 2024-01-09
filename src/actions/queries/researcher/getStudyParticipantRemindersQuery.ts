import { getStudyParticipantRemindersReference } from "api//firestore/references";
import { DocumentID } from "types/custom";

export const getStudyParticipantRemindersQuery = (studyID: DocumentID, participantID: DocumentID) => {
  return getStudyParticipantRemindersReference(studyID, participantID);
};
