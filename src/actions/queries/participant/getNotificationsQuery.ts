import { getParticipantNotificationsReference } from "api//firestore/references";
import { DocumentID } from "types/custom";

export const getNotificationsQuery = (participantID: DocumentID) => {
  return getParticipantNotificationsReference(participantID);
};
