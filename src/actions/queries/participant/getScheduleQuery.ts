import { firestore } from "config";
import { DocumentID } from "types/custom";

export const getScheduleQuery = (participantID: DocumentID) => {
  return firestore.collectionGroup("meetings").where("participantID", "==", participantID);
};
