import { auth } from "config";
import { updateResearcherNotificationDocument } from "api/firestore/mutations/researcherNotification";
import { DocumentID } from "types/custom";

interface ReadNotificationPayload {
  notificationID: DocumentID;
}

export const readNotification = async ({ notificationID }: ReadNotificationPayload) => {
  if (auth.currentUser) {
    const researcherID = auth.currentUser.uid;

    updateResearcherNotificationDocument(researcherID, notificationID, {
      read: true,
    });
  }
};
