import { auth } from "config";
import { updateMeetingDocument } from "api/firestore/mutations/meeting";
import { DocumentID } from "types/custom";

interface ConfirmMeetingPayload {
  studyID: DocumentID;
  meetingID: DocumentID;
}

export const confirmMeeting = async ({ studyID, meetingID }: ConfirmMeetingPayload) => {
  if (auth.currentUser) {
    const participantID = auth.currentUser.uid;

    updateMeetingDocument(studyID, participantID, meetingID, {
      confirmedByParticipant: true,
    });
  }
};
