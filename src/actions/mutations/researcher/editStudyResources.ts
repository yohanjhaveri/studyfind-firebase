import { updateStudyDocument } from "api/firestore/mutations/study";
import { StudyResource } from "types/documents/study";
import { DocumentID } from "types/custom";

interface EditStudyResourcesPayload {
  resources: StudyResource[];
}

export const editStudyResources = async (studyID: DocumentID, data: EditStudyResourcesPayload) => {
  updateStudyDocument(studyID, data);
};
