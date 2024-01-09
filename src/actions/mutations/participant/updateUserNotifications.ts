import { auth } from "config";
import { updateParticipantDocument } from "api/firestore/mutations/participant";

interface UpdateNotificationsPayload {
  local?: boolean;
  email?: boolean;
  phone?: boolean;
}

export const updateNotifications = (notifications: UpdateNotificationsPayload) => {
  if (auth.currentUser) {
    const participantID = auth.currentUser.uid;

    updateParticipantDocument(participantID, {
      notifications,
    });
  }
};
