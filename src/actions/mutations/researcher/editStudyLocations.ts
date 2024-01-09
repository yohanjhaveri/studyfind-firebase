import { updateStudyDocument } from "api/firestore/mutations/study";
import { StudyLocation } from "types/documents/study";
import { DocumentID } from "types/custom";

interface EditStudyLocationsPayload {
  locations: StudyLocation[];
}

export const editStudyLocations = async (studyID: DocumentID, data: EditStudyLocationsPayload) => {
  updateStudyDocument(studyID, data);
};
