import { DocumentID, UserID } from "types/custom";
import { NoteDocumentStructure } from "types/documents/note";

export interface CreateNoteDocument {
  title: string;
  body: string;
  participantID: UserID;
  researcherID: UserID;
  studyID: DocumentID;
}

export interface UpdateNoteDocument {
  title?: string;
  body?: string;
}
