import { createDocument } from "api//firestore/utils";
import { updateDocument } from "api//firestore/utils";
import { deleteDocument } from "api//firestore/utils";

import { getStudyParticipantReminderReference, getStudyParticipantRemindersReference } from "../references";

import { CreateReminderDocument, UpdateReminderDocument } from "types/mutations/reminder";
import { DocumentID } from "types/custom";

export const createReminderDocument = (
  studyID: DocumentID,
  participantID: DocumentID,
  data: CreateReminderDocument
) => {
  return createDocument(getStudyParticipantRemindersReference(studyID, participantID), data);
};

export const updateReminderDocument = (
  studyID: DocumentID,
  participantID: DocumentID,
  reminderID: DocumentID,
  data: UpdateReminderDocument
) => {
  return updateDocument(getStudyParticipantReminderReference(studyID, participantID, reminderID), data);
};

export const deleteReminderDocument = (studyID: DocumentID, participantID: DocumentID, reminderID: DocumentID) => {
  return deleteDocument(getStudyParticipantReminderReference(studyID, participantID, reminderID));
};
