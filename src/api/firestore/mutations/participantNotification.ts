import { updateDocument } from "api/firestore/utils";

import { getParticipantNotificationReference } from "../references";

import { UpdateParticipantNotification } from "types/mutations/participant-notification";
import { DocumentID } from "types/custom";

export const updateParticipantNotificationDocument = (
  participantID: DocumentID,
  notificationID: DocumentID,
  data: UpdateParticipantNotification
) => {
  return updateDocument(getParticipantNotificationReference(participantID, notificationID), data);
};
