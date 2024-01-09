import { auth } from "config";
import { updateResearcherDocument } from "api/firestore/mutations/researcher";

interface UpdateNotificationsPayload {
  local?: boolean;
  email?: boolean;
  phone?: boolean;
}

export const updateNotifications = (notifications: UpdateNotificationsPayload) => {
  if (auth.currentUser) {
    const researcherID = auth.currentUser.uid;

    updateResearcherDocument(researcherID, {
      notifications,
    });
  }
};
