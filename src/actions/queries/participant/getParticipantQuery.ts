import { getParticipantReference } from "api//firestore/references";
import { DocumentID } from "types/custom";

export const getParticipantQuery = (participantID: DocumentID) => {
  return getParticipantReference(participantID);
};
