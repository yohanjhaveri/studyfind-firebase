import { getStudiesReference } from "api//firestore/references";
import { DocumentID } from "types/custom";

export const getStudiesQuery = (researcherID: DocumentID) => {
  // TODO: update based on more complex filters
  return getStudiesReference().where("researcher.id", "==", researcherID);
};
