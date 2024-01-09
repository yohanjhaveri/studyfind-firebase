import firebase from "firebase";

import { storage } from "config";
import { DocumentID } from "types/custom";

export const uploadStudyFile = (
  studyID: DocumentID,
  name: string,
  file: File,
  progressCallback: (snapshot: firebase.storage.UploadTaskSnapshot) => void
) => {
  return new Promise((resolve, reject) => {
    const ref = storage.ref(`study/${studyID}/${name}`);
    const task = ref.put(file);

    task.on("state_changed", progressCallback, reject, () => resolve(undefined));
  });
};
