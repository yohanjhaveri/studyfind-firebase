import { auth } from "config";
import { updateParticipantNotificationDocument } from "api/firestore/mutations/participantNotification";
import { DocumentID } from "types/custom";

interface ReadNotificationPayload {
  notificationID: DocumentID;
}

export const readNotification = async ({ notificationID }: ReadNotificationPayload) => {
  if (auth.currentUser) {
    const participantID = auth.currentUser.uid;

    updateParticipantNotificationDocument(participantID, notificationID, {
      read: true,
    });
  }
};
