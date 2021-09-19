import { WeeklyOffset, Date, UID, DID } from "./custom-types";

export interface Reminder {
  title: string;
  times: WeeklyOffset[];
  startDate: Date;
  endDate: Date;
  participantID: UID;
  researcherID: UID;
  studyID: DID;
  confirmedByParticipant: boolean;
}
