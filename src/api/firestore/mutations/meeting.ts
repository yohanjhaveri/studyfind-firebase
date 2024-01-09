import { createDocument } from "api//firestore/utils";
import { updateDocument } from "api//firestore/utils";
import { deleteDocument } from "api//firestore/utils";

import { getStudyParticipantMeetingReference, getStudyParticipantMeetingsReference } from "../references";

import { CreateMeetingDocument, UpdateMeetingDocument } from "types/mutations/meeting";
import { DocumentID } from "types/custom";

export const createMeetingDocument = (studyID: DocumentID, participantID: DocumentID, data: CreateMeetingDocument) => {
  return createDocument(getStudyParticipantMeetingsReference(studyID, participantID), data);
};

export const updateMeetingDocument = (
  studyID: string,
  participantID: string,
  meetingID: string,
  data: UpdateMeetingDocument
) => {
  return updateDocument(getStudyParticipantMeetingReference(studyID, participantID, meetingID), data);
};

export const deleteMeetingDocument = (studyID: DocumentID, participantID: DocumentID, meetingID: DocumentID) => {
  return deleteDocument(getStudyParticipantMeetingReference(studyID, participantID, meetingID));
};
