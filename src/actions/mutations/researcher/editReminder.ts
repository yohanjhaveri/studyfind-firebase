import { auth } from "config";
import { updateReminderDocument } from "api/firestore/mutations/reminder";
import { Date, DocumentID, WeeklyOffset } from "types/custom";

interface EditReminderPayload {
  studyID: DocumentID;
  participantID: DocumentID;
  reminderID: DocumentID;
  title: string;
  times: WeeklyOffset[];
  startDate: Date;
  endDate: Date;
}

export const editReminder = async ({
  studyID,
  participantID,
  reminderID,
  title,
  times,
  startDate,
  endDate,
}: EditReminderPayload) => {
  if (auth.currentUser) {
    updateReminderDocument(studyID, participantID, reminderID, {
      title,
      times,
      startDate,
      endDate,
    });
  }
};
