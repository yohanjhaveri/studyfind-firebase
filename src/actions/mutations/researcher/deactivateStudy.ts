import { updateStudyDocument } from "api/firestore/mutations/study";
import { DocumentID } from "types/custom";

export const deactivateStudy = async (studyID: DocumentID) => {
  updateStudyDocument(studyID, {
    activated: false,
  });
};
