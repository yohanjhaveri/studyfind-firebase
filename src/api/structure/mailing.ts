import { Timestamp, UserType, Email } from "./custom-types";

export interface Mailing {
  time: Timestamp;
  side: UserType;
  email: Email;
}
