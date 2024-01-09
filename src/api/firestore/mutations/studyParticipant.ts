import { setDocument } from "api/firestore/utils";
import { updateDocument } from "api/firestore/utils";
import { deleteDocument } from "api/firestore/utils";

import { getStudyParticipantReference } from "../references";

import { CreateStudyParticipantDocument, UpdateStudyParticipantDocument } from "types/mutations/study-participant";
import { DocumentID } from "types/custom";

export const createStudyParticipantDocument = (
  studyID: DocumentID,
  participantID: DocumentID,
  data: CreateStudyParticipantDocument
) => {
  return setDocument(getStudyParticipantReference(studyID, participantID), data);
};

export const updateStudyParticipantDocument = (
  studyID: DocumentID,
  participantID: DocumentID,
  data: UpdateStudyParticipantDocument
) => {
  return updateDocument(getStudyParticipantReference(studyID, participantID), data);
};

export const deleteStudyParticipantDocument = (studyID: DocumentID, participantID: DocumentID) => {
  return deleteDocument(getStudyParticipantReference(studyID, participantID));
};
