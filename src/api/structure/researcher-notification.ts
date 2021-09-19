import { Timestamp, URL } from "./custom-types";

type ResearcherNotificationCode =
  | "CREATE_ACCOUNT"
  | "DELETE_ACCOUNT"
  | "CREATE_STUDY"
  | "DELETE_STUDY"
  | "PARTICIPANT_ENROLLED"
  | "PARTICIPANT_CONFIRMED_MEETING"
  | "PARTICIPANT_CONFIRMED_REMINDER"
  | "MEETING_NOW";

export interface ResearcherNotification {
  code: ResearcherNotificationCode;
  time: Timestamp;
  link: URL;
  read: boolean;
  title: string;
  description: string;
}
