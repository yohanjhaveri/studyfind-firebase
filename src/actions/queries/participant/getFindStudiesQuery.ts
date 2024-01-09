import { getStudiesReference } from "api/firestore/references";

export const getFindStudiesQuery = () => {
  // TODO: update based on more complex filters
  return getStudiesReference().where("activated", "==", true);
};
