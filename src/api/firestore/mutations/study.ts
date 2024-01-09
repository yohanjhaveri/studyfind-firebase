import { createDocument } from "api//firestore/utils";
import { updateDocument } from "api//firestore/utils";
import { deleteDocument } from "api//firestore/utils";

import { getStudiesReference, getStudyReference } from "../references";

import { CreateStudyDocument, UpdateStudyDocument } from "types/mutations/study";
import { DocumentID } from "types/custom";

export const createStudyDocument = (data: CreateStudyDocument) => {
  return createDocument(getStudiesReference(), data);
};

export const updateStudyDocument = (studyID: DocumentID, data: UpdateStudyDocument) => {
  return updateDocument(getStudyReference(studyID), data);
};

export const deleteStudyDocument = (studyID: DocumentID) => {
  return deleteDocument(getStudyReference(studyID));
};
