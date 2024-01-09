import { updateStudyDocument } from "api/firestore/mutations/study";
import { StudyQuestion } from "types/documents/study";
import { DocumentID } from "types/custom";

interface EditStudyQuestionsPayload {
  questions: StudyQuestion[];
}

export const editStudyQuestions = async (studyID: DocumentID, data: EditStudyQuestionsPayload) => {
  updateStudyDocument(studyID, data);
};
