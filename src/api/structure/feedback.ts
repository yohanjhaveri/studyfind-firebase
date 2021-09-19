import { Timestamp, UserType, Email } from "./custom-types";

export interface Feedback {
  time: Timestamp;
  side: UserType;
  email: Email;
  title: string;
  body: string;
}
