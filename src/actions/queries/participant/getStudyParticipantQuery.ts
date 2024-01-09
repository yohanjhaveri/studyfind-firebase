import { getStudyParticipantReference } from "api//firestore/references";
import { DocumentID } from "types/custom";

export const getStudyParticipantQuery = (studyID: DocumentID, participantID: DocumentID) => {
  return getStudyParticipantReference(studyID, participantID);
};
