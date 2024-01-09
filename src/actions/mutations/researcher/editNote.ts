import { auth } from "config";
import { updateNoteDocument } from "api/firestore/mutations/note";
import { DocumentID } from "types/custom";

interface EditNotePayload {
  studyID: DocumentID;
  participantID: DocumentID;
  noteID: DocumentID;
  title: string;
  body: string;
}

export const editNote = async ({ studyID, participantID, noteID, title, body }: EditNotePayload) => {
  if (auth.currentUser) {
    updateNoteDocument(studyID, participantID, noteID, {
      title,
      body,
    });
  }
};
