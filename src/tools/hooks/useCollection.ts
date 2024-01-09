import firebase from "firebase";

import { useCollectionData } from "react-firebase-hooks/firestore";

function useCollection<T>(query: firebase.firestore.CollectionReference) {
  return useCollectionData<T>(query, { idField: "id", refField: "ref" });
}

export default useCollection;
