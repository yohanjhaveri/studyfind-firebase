import { createDocument } from "api//firestore/utils";
import { updateDocument } from "api//firestore/utils";
import { deleteDocument } from "api//firestore/utils";

import { getStudyParticipantNoteReference, getStudyParticipantNotesReference } from "../references";

import { CreateNoteDocument, UpdateNoteDocument } from "types/mutations/note";
import { DocumentID } from "types/custom";

export const createNoteDocument = (studyID: DocumentID, participantID: DocumentID, data: CreateNoteDocument) => {
  return createDocument(getStudyParticipantNotesReference(studyID, participantID), data);
};

export const updateNoteDocument = (
  studyID: DocumentID,
  participantID: DocumentID,
  noteID: DocumentID,
  data: UpdateNoteDocument
) => {
  return updateDocument(getStudyParticipantNoteReference(studyID, participantID, noteID), data);
};

export const deleteNoteDocument = (studyID: DocumentID, participantID: DocumentID, noteID: DocumentID) => {
  return deleteDocument(getStudyParticipantNoteReference(studyID, participantID, noteID));
};
