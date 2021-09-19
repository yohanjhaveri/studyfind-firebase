import { authenticate } from "api";
import { refs } from "../refs";

export const meeting = {
  create: ({ name, link, time, participantID, studyID }) => {
    return refs.meetings().add({
      name,
      link,
      time,
      studyID,
      participantID,
      researcherID: authenticate.getUserID(),
      confirmedByParticipant: false,
    });
  },

  update: (meetingID, updatedData) => {
    return refs.meeting(meetingID).update(updatedData);
  },

  delete: (meetingID) => {
    return refs.meeting(meetingID).delete();
  },
};
