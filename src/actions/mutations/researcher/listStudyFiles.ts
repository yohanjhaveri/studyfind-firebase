import firebase from "firebase";

import { storage } from "config";
import { DocumentID } from "types/custom";

interface FileData {
  ref: firebase.storage.Reference;
  name: string;
  time: string;
}

export const listStudyFiles = async (studyID: DocumentID): Promise<FileData[]> => {
  const { items } = await storage.ref(`study/${studyID}`).listAll();

  return Promise.all(
    items.map(async (ref) => {
      const meta = await ref.getMetadata();

      return {
        ref,
        name: ref.name,
        time: meta.timeCreated,
      };
    })
  );
};
