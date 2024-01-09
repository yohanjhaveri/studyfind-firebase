import { storage } from "config";
import { DocumentID } from "types/custom";

export const deleteStudyFile = async (studyID: DocumentID, name: string) => {
  storage.ref(`study/${studyID}/${name}`).delete();
};
