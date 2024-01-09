import { auth } from "config";
import { updateMeetingDocument } from "api/firestore/mutations/meeting";
import { DocumentID, Timestamp, URL } from "types/custom";

interface EditMeetingPayload {
  studyID: DocumentID;
  participantID: DocumentID;
  meetingID: DocumentID;
  name: string;
  link: URL;
  time: Timestamp;
}

export const editMeeting = async ({ studyID, participantID, meetingID, name, link, time }: EditMeetingPayload) => {
  if (auth.currentUser) {
    updateMeetingDocument(studyID, participantID, meetingID, {
      name,
      link,
      time,
    });
  }
};
