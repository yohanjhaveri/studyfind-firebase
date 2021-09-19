import { firestore } from "config";

const COLLECTION_NAMES = {
  feedback: "feedback",
  participants: "participants",
  researchers: "researchers",
  reminders: "reminders",
  meetings: "meetings",
  studies: "studies",
  notifications: "notifications",
  notes: "notes",
  messages: "messages",
  mailing: "mailing",
};

const mailing = () => firestore.collection(COLLECTION_NAMES.feedback);
const feedback = () => firestore.collection(COLLECTION_NAMES.feedback);

const participants = () => firestore.collection(COLLECTION_NAMES.participants);
const researchers = () => firestore.collection(COLLECTION_NAMES.researchers);
const reminders = () => firestore.collection(COLLECTION_NAMES.reminders);
const meetings = () => firestore.collection(COLLECTION_NAMES.meetings);
const studies = () => firestore.collection(COLLECTION_NAMES.studies);

const participant = (participantID) => participants.doc(participantID);
const researcher = (researcherID) => researchers.doc(researcherID);
const reminder = (reminderID) => reminders.doc(reminderID);
const meeting = (meetingID) => meetings.doc(meetingID);
const study = (studyID) => studies.doc(studyID);

const researcherNotifications = (researcherID) =>
  researcher(researcherID).collection(COLLECTION_NAMES.notifications);

const participantNotifications = (participantID) =>
  participant(participantID).collection(COLLECTION_NAMES.notifications);

const studyParticipants = (studyID) =>
  study(studyID).collection(COLLECTION_NAMES.participants);

const researcherNotification = (researcherID, notificationID) =>
  researcherNotifications(researcherID).doc(notificationID);

const participantNotification = (participantID, notificationID) =>
  participantNotifications(participantID).doc(notificationID);

const studyParticipant = (studyID, participantID) =>
  studyParticipants(studyID).doc(participantID);

const studyParticipantNotes = (studyID, participantID) =>
  studyParticipant(studyID, participantID).collection(COLLECTION_NAMES.notes);

const studyParticipantMessages = (studyID, participantID) =>
  studyParticipant(studyID, participantID).collection(
    COLLECTION_NAMES.messages
  );

const studyParticipantNote = (studyID, participantID, noteID) =>
  studyParticipantNotes(studyID, participantID).doc(noteID);

const studyParticipantMessage = (studyID, participantID, messageID) =>
  studyParticipantMessages(studyID, participantID).doc(messageID);

export const refs = {
  mailing,
  feedback,

  participants,
  researchers,
  reminders,
  meetings,
  studies,

  participant,
  researcher,
  reminder,
  meeting,
  study,

  researcherNotifications,
  participantNotifications,
  studyParticipants,

  researcherNotification,
  participantNotification,
  studyParticipant,

  studyParticipantNotes,
  studyParticipantMessages,

  studyParticipantNote,
  studyParticipantMessage,
};
