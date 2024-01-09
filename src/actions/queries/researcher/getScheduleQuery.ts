import { firestore } from "config";
import { DocumentID } from "types/custom";

export const getScheduleQuery = (researcherID: DocumentID) => {
  return firestore.collectionGroup("meetings").where("researcherID", "==", researcherID);
};
