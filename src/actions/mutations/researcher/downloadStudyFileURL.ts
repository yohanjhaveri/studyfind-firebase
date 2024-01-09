import firebase from "firebase";

import { storage } from "config";

export const listStudyFiles = async (ref: firebase.storage.Reference): Promise<string> => {
  return ref.getDownloadURL();
};
