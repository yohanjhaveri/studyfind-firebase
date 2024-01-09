import { auth } from "config";
import { createNoteDocument } from "api/firestore/mutations/note";
import { DocumentID } from "types/custom";

interface EditNotePayload {
  studyID: DocumentID;
  participantID: DocumentID;
  noteID: DocumentID;
  title: string;
  body: string;
}

export const editNote = async ({ studyID, participantID, title, body }: EditNotePayload) => {
  if (auth.currentUser) {
    const researcherID = auth.currentUser.uid;

    createNoteDocument(studyID, participantID, {
      title,
      body,
      studyID,
      participantID,
      researcherID,
    });
  }
};
