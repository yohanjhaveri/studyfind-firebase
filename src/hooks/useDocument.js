import { useDocumentData } from "react-firebase-hooks/firestore";

function useDocument(query, options) {
  return useDocumentData(query, { idField: "id", ...options });
}

export default useDocument;
