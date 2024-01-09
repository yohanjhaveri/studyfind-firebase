import { updateStudyDocument } from "api/firestore/mutations/study";
import { DocumentID } from "types/custom";

export const activateStudy = async (studyID: DocumentID) => {
  updateStudyDocument(studyID, {
    activated: true,
  });
};
