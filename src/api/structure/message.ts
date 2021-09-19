import { Timestamp, UID } from "./custom-types";

export interface Message {
  time: Timestamp;
  user: UID;
  text: string;
  read: boolean;
}
