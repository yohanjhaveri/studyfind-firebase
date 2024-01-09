import { auth } from "config";
import { updateReminderDocument } from "api/firestore/mutations/reminder";
import { DocumentID } from "types/custom";

interface ConfirmReminderPayload {
  studyID: DocumentID;
  reminderID: DocumentID;
}

export const confirmReminder = async ({ studyID, reminderID }: ConfirmReminderPayload) => {
  if (auth.currentUser) {
    const participantID = auth.currentUser.uid;

    updateReminderDocument(studyID, participantID, reminderID, {
      confirmedByParticipant: true,
    });
  }
};
