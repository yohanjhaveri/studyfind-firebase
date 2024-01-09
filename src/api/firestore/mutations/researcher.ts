import { setDocument } from "api/firestore/utils";
import { updateDocument } from "api/firestore/utils";
import { deleteDocument } from "api/firestore/utils";

import { getResearcherReference } from "../references";

import { CreateResearcherDocument, UpdateResearcherDocument } from "types/mutations/researcher";
import { DocumentID } from "types/custom";

export const createResearcherDocument = (researcherID: DocumentID, data: CreateResearcherDocument) => {
  return setDocument(getResearcherReference(researcherID), data);
};

export const updateResearcherDocument = (researcherID: DocumentID, data: UpdateResearcherDocument) => {
  return updateDocument(getResearcherReference(researcherID), data);
};

export const deleteResearcherDocument = (researcherID: DocumentID) => {
  return deleteDocument(getResearcherReference(researcherID));
};
