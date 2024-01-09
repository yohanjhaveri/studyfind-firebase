import { auth } from "config";
import { createReminderDocument } from "api/firestore/mutations/reminder";
import { Date, DocumentID, WeeklyOffset } from "types/custom";

interface ScheduleReminderPayload {
  studyID: DocumentID;
  participantID: DocumentID;
  title: string;
  times: WeeklyOffset[];
  startDate: Date;
  endDate: Date;
}

export const scheduleReminder = async ({
  studyID,
  participantID,
  title,
  times,
  startDate,
  endDate,
}: ScheduleReminderPayload) => {
  if (auth.currentUser) {
    const researcherID = auth.currentUser.uid;

    createReminderDocument(studyID, participantID, {
      title,
      times,
      startDate,
      endDate,
      researcherID,
      participantID,
      studyID,
      confirmedByParticipant: false,
    });
  }
};
