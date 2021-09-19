import moment from "moment-timezone";
import { refs } from "../refs";

// ================================ //
// ============ COMMON ============ //
// ================================ //

const viewStudy = (studyID) => {
  return refs.study(studyID);
};

const viewStudyParticipants = (studyID) => {
  return refs.studyParticipants(studyID);
};

const viewStudyParticipantMessages = (studyID, participantID) => {
  return refs
    .studyParticipantMessages(studyID, participantID)
    .orderBy("time", "asc");
};

const viewStudyParticipantNotes = (studyID, participantID) => {
  return refs
    .studyParticipantNotes(studyID, participantID)
    .orderBy("time", "asc");
};

const viewStudyParticipantMeetings = (studyID, participantID) => {
  return refs
    .meetings()
    .where("studyID", "==", studyID)
    .where("participantID", "==", participantID)
    .orderBy("time", "asc");
};

const viewStudyParticipantReminders = (studyID, participantID) => {
  return refs
    .reminders()
    .where("studyID", "==", studyID)
    .where("participantID", "==", participantID)
    .orderBy("startDate", "asc");
};

// ==================================== //
// ============ RESEARCHER ============ //
// ==================================== //

// RESEARCHER DASHBOARD
const researcherDashboard = (researcherID) => {
  return refs.studies().where("researcher.id", "==", researcherID);
};

// RESEARCHER NOTIFICATIONS
const researcherNotifications = (researcherID) => {
  return refs.researcherNotifications(researcherID);
};

// RESEARCHER SCHEDULE
const researcherSchedule = (researcherID, date) =>
  refs
    .meetings()
    .where("researcherID", "==", researcherID)
    .where("time", ">=", moment(date).startOf("day").valueOf())
    .where("time", "<=", moment(date).endOf("day").valueOf())
    .orderBy("time", "asc");

// RESEARCHER ACCOUNT
const researcherAccount = (researcherID) => {
  return refs.researcher(researcherID);
};

// ===================================== //
// ============ PARTICIPANT ============ //
// ===================================== //

// PARTICIPANT FIND STUDIES
const participantFindStudies = () => {
  return refs.studies().where("activated", "==", true);
};

// PARTICIPANT YOUR STUDIES
const participantYourStudies = () => {
  return refs.studies().where("activated", "==", true);
};

// PARTICIPANT NOTIFICATIONS
const participantNotifications = (participantID) => {
  return refs.participantNotifications(participantID);
};

// PARTICIPANT SCHEDULE
const participantSchedule = (participantID, date) => {
  return refs
    .meetings()
    .where("participantID", "==", participantID)
    .where("time", ">=", moment(date).startOf("day").valueOf())
    .where("time", "<=", moment(date).endOf("day").valueOf())
    .orderBy("time", "asc");
};

// PARTICIPANT ACCOUNT
const participantAccount = (participantID) => {
  return refs.participant(participantID);
};

export const queries = {
  // COMMON
  viewStudy,
  viewStudyParticipants,
  viewStudyParticipantMessages,
  viewStudyParticipantNotes,
  viewStudyParticipantMeetings,
  viewStudyParticipantReminders,

  // RESEARCHER
  researcherDashboard,
  researcherNotifications,
  researcherSchedule,
  researcherAccount,

  // PARTICIPANT
  participantFindStudies,
  participantYourStudies,
  participantNotifications,
  participantSchedule,
  participantAccount,
};
