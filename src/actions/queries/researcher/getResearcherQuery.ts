import { getResearcherReference } from "api//firestore/references";
import { DocumentID } from "types/custom";

export const getResearcherQuery = (researcherID: DocumentID) => {
  return getResearcherReference(researcherID);
};
