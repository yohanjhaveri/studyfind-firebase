import { auth } from "config";
import { createMeetingDocument } from "api/firestore/mutations/meeting";
import { DocumentID, Timestamp, URL } from "types/custom";

interface ScheduleMeetingPayload {
  studyID: DocumentID;
  participantID: DocumentID;
  name: string;
  link: URL;
  time: Timestamp;
}

export const scheduleMeeting = async ({ studyID, participantID, name, link, time }: ScheduleMeetingPayload) => {
  if (auth.currentUser) {
    const researcherID = auth.currentUser.uid;

    createMeetingDocument(studyID, participantID, {
      name,
      link,
      time,
      researcherID,
      participantID,
      studyID,
      confirmedByParticipant: false,
    });
  }
};
