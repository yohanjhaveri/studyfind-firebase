import { createDocument } from "api//firestore/utils";
import { updateDocument } from "api//firestore/utils";
import { deleteDocument } from "api//firestore/utils";

import { getStudyParticipantMessageReference, getStudyParticipantMessagesReference } from "../references";

import { CreateMessageDocument, UpdateMessageDocument } from "types/mutations/message";
import { DocumentID } from "types/custom";

export const createMessageDocument = (studyID: DocumentID, participantID: DocumentID, data: CreateMessageDocument) => {
  return createDocument(getStudyParticipantMessagesReference(studyID, participantID), data);
};

export const updateMessageDocument = (
  studyID: DocumentID,
  participantID: DocumentID,
  messageID: DocumentID,
  data: UpdateMessageDocument
) => {
  return updateDocument(getStudyParticipantMessageReference(studyID, participantID, messageID), data);
};

export const deleteMessageDocument = (studyID: DocumentID, participantID: DocumentID, messageID: DocumentID) => {
  return deleteDocument(getStudyParticipantMessageReference(studyID, participantID, messageID));
};
