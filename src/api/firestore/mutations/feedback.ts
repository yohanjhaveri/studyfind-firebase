import { createDocument } from "api//firestore/utils";
import { getFeedbackReference } from "../references";

import { CreateFeedbackDocument } from "types/mutations/feedback";

export const createFeedbackDocument = (data: CreateFeedbackDocument) => {
  return createDocument(getFeedbackReference(), data);
};
