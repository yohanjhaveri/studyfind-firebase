import { updateDocument } from "api/firestore/utils";

import { getResearcherNotificationReference } from "../references";

import { UpdateResearcherNotification } from "types/mutations/researcher-notification";
import { DocumentID } from "types/custom";

export const updateResearcherNotificationDocument = (
  researcherID: DocumentID,
  notificationID: DocumentID,
  data: UpdateResearcherNotification
) => {
  return updateDocument(getResearcherNotificationReference(researcherID, notificationID), data);
};
