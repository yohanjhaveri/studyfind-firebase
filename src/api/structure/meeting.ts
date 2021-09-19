import { Timestamp, URL, UID, DID } from "./custom-types";

export interface Meeting {
  name: string;
  link: URL;
  time: Timestamp;
  participantID: UID;
  researcherID: UID;
  studyID: DID;
  confirmedByParticipant: boolean;
}
