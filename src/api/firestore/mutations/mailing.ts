import { firestore } from "config";
import { createDocument } from "api//firestore/utils";
import { CreateMailingDocument } from "types/mutations/mailing";

export const createMailingDocument = (data: CreateMailingDocument) => {
  return createDocument(firestore.collection("mailing"), data);
};
