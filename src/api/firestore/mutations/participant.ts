import { setDocument } from "api/firestore/utils";
import { updateDocument } from "api/firestore/utils";
import { deleteDocument } from "api/firestore/utils";

import { getParticipantReference } from "../references";

import { CreateParticipantDocument, UpdateParticipantDocument } from "types/mutations/participant";
import { DocumentID } from "types/custom";

export const createParticipantDocument = (participantID: DocumentID, data: CreateParticipantDocument) => {
  return setDocument(getParticipantReference(participantID), data);
};

export const updateParticipantDocument = (participantID: DocumentID, data: UpdateParticipantDocument) => {
  return updateDocument(getParticipantReference(participantID), data);
};

export const deleteParticipantDocument = (participantID: DocumentID) => {
  return deleteDocument(getParticipantReference(participantID));
};
