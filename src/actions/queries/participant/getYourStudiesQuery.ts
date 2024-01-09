import { getStudyReference } from "api//firestore/references";
import { DocumentID } from "types/custom";

export const getYourStudiesQuery = (studyIDs: DocumentID[]) => {
  // ! IMPORTANT: This returns a list of document references due to the nature in which the database is laid out
  return studyIDs.map((studyID) => getStudyReference(studyID));
};
