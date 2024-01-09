import { getResearcherNotificationsReference } from "api//firestore/references";
import { DocumentID } from "types/custom";

export const getNotificationsQuery = (researcherID: DocumentID) => {
  return getResearcherNotificationsReference(researcherID);
};
