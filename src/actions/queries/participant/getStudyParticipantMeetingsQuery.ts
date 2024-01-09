import { getStudyParticipantMeetingsReference } from "api//firestore/references";
import { DocumentID } from "types/custom";

export const getStudyParticipantMeetingsQuery = (studyID: DocumentID, participantID: DocumentID) => {
  return getStudyParticipantMeetingsReference(studyID, participantID);
};
