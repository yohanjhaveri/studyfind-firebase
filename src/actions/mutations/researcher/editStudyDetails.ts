import { updateStudyDocument } from "api/firestore/mutations/study";
import { DocumentID } from "types/custom";
import { StudySex, StudyType } from "types/documents/study";

interface EditStudyDetailsPayload {
  title: string;
  description: string;
  sex: StudySex;

  minAge: number;
  maxAge: number;
  acceptsHealthyParticipants: boolean;
  acceptsRemoteParticipants: boolean;
  type: StudyType;

  conditions: string[];
}

export const editStudyDetails = async (studyID: DocumentID, data: EditStudyDetailsPayload) => {
  updateStudyDocument(studyID, data);
};
