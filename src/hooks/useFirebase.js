import { useContext } from "react";
import { FirebaseContext } from "../context/FirebaseContext";

function useFirebase() {
  return useContext(FirebaseContext);
}

export default useFirebase;
