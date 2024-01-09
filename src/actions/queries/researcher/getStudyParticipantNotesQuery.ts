import { getStudyParticipantNotesReference } from "api//firestore/references";
import { DocumentID } from "types/custom";

export const getStudyParticipantNotesQuery = (studyID: DocumentID, participantID: DocumentID) => {
  return getStudyParticipantNotesReference(studyID, participantID);
};
