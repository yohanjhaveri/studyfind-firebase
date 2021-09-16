import { useCollectionData } from "react-firebase-hooks/firestore";

function useCollection(query, options) {
  return useCollectionData(query, {
    idField: "id",
    ...options
  });
}

export default useCollection;